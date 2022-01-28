// Component
export abstract class ProductComponent {
    abstract getPrice(): number

    add(...product: ProductComponent[]): void {}
    remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super()
    }

    getPrice(): number {
        return this.price
    }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = []

    add(...products: ProductComponent[]): void {
        products.forEach(product => this.children.push(product))
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product)
        if (productIndex >= 0) this.children.splice(productIndex, 1)
    }

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
    }
}

// Client Code
const camisa = new ProductLeaf("Camisa", 40)
const calca = new ProductLeaf("Calça", 120)
const bone = new ProductLeaf("Boné", 35)
const roupas = new ProductComposite()
roupas.add(camisa, calca, bone)

const chinelo = new ProductLeaf("Chinelo", 30)
const botina = new ProductLeaf("Botina", 250)
const tenis = new ProductLeaf("Tênis", 140)
const sapatos = new ProductComposite()
sapatos.add(chinelo, botina, tenis)

const compras = new ProductComposite()
compras.add(roupas, sapatos)

console.log(compras)
console.log(compras.getPrice())
