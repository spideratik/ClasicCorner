// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

// This is a placeholder for your database logic
// Once you connect Prisma, you will replace the array with database calls
export async function GET() {
  try {
    // Sample data to make sure your frontend looks beautiful immediately
    const products = [
      {
        id: '1',
        name: 'Terracotta Vase',
        price: 45.00,
        category: 'Ceramics',
        mainImage: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: '2',
        name: 'Monstera Deliciosa',
        price: 32.00,
        category: 'Indoor Plants',
        mainImage: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
      }
    ];

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Logic to save to your database will go here later
    console.log("New product received:", body);
    return NextResponse.json({ message: "Product created successfully", product: body });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid product data' }, { status: 400 });
  }
}