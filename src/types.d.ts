interface Section {
    id: string
    name: string
    products: Product[]
}

interface Product {
    id: string | number
    name: string
    description?: string
    price: number
    sectionId: string
}
