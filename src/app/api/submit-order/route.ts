import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['nume', 'telefon', 'locatie', 'produs', 'data']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          ok: false, 
          error: `Lipsesc câmpurile obligatorii: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Validate email format if provided
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Adresa de email nu este validă' 
        },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!/^0[0-9]{9}$/.test(body.telefon.replace(/\s/g, ''))) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Numărul de telefon nu este valid' 
        },
        { status: 400 }
      )
    }

    // Validate date is not in the past
    const orderDate = new Date(body.data)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (orderDate < today) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Data comenzii nu poate fi în trecut' 
        },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp/SMS notification
    // 4. Update inventory
    
    // For now, we'll just log the order and return success
    console.log('New order received:', {
      ...body,
      timestamp: new Date().toISOString(),
      orderId: `BB-${Date.now()}`
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ 
      ok: true,
      message: 'Comanda a fost primită cu succes! Te vom contacta în curând pentru confirmare.',
      orderId: `BB-${Date.now()}`
    })

  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { 
        ok: false, 
        error: 'A apărut o eroare la procesarea comenzii. Te rugăm să încerci din nou.' 
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { 
      ok: false, 
      error: 'Metoda nu este permisă' 
    },
    { status: 405 }
  )
}
