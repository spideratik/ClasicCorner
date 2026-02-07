import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your Secret Key from .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any, // 2026 stable version
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    // 1. Map your cart items to Stripe's format
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.mainImage], // Full URL to your product image
          description: item.category,
        },
        unit_amount: Math.round(item.price * 100), // Stripe calculates in cents ($10.00 = 1000)
      },
      quantity: item.quantity || 1,
    }));

    // 2. Create the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      // Update these URLs to your actual Vercel domain later
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/shop`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'BD'], // Add Bangladesh (BD) or your target countries
      },
    });

    // 3. Return the Session ID to the frontend
    return NextResponse.json({ sessionId: session.id });

  } catch (error: any) {
    console.error('Stripe Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}