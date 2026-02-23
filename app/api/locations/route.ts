import { ILocation } from "@/types/marker.types"
import { NextResponse } from "next/server"

export async function GET() {
    const locations: ILocation[] = [
        { id: 1, label: "Woodward Hall", position: [35.3071, -80.7357] },
        { id: 2, label: "Mebane Hall", position: [35.3073, -80.734] },
        { id: 3, label: "University Recreation Center", position: [35.3081, -80.7355] }
    ]

    return NextResponse.json(locations)
}