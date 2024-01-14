import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await currentUser()
  console.log(user)
  return NextResponse.json({ user })
}