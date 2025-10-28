import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { Product } from '../../../types';

const filePath = path.join(process.cwd(), 'data', 'products.json');

function getProducts(): Product[] {
  const data = readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function saveProducts(products: Product[]) {
  writeFileSync(filePath, JSON.stringify(products, null, 2));
}

export async function GET() {
  const products = getProducts();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('Authorization')?.replace('Bearer ', '');
  if (auth !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body: Omit<Product, 'id' | 'lastUpdated'> = await req.json();
  const products = getProducts();
  const newProduct: Product = {
    ...body,
    id: Date.now().toString(),
    lastUpdated: new Date().toISOString(),
  };
  products.push(newProduct);
  saveProducts(products);
  // ISR Revalidation (on-demand)
  import('next/cache').then(({ revalidatePath }) => revalidatePath('/products/[slug]'));
  return NextResponse.json(newProduct, { status: 201 });
}
