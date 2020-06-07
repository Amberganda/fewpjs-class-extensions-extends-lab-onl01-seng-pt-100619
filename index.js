// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function (total, val) {
            return total + val

        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        this.sides.sort()
        const [a, b, c] = this.sides
        return (this.countSides === 3) && (a + b >= c)
    }

}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {
            return false
        }
        const [length] = this.sides

        const lengths = this.sides.filter(function (side) {

            return length === side
        })
        return lengths.length === 4
    }
    get area() {
        const [length] = this.sides
        return length * length
    }

    get perimeter() {
        const [length] = this.sides
        return length * 4
    }
}