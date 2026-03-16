import { NextResponse } from 'next/server'

// Simple registration that doesn't require database for demo
export async function POST(req: Request) {
  try {
    const { name, email, company, password } = await req.json()

    // For demo purposes, just return success
    // In production, this would save to database
    return NextResponse.json({
      user: {
        id: 'demo-user-id',
        name,
        email,
      },
      message: 'Account created successfully (demo mode)',
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
}
