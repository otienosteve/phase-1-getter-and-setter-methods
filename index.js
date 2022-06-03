// Add your Circle class here
class Circle {

    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get area() {
        return this.radius ** 2 * (Math.PI)
    }
    get circumference() {
        return this.radius * 2 * (Math.PI)
    }
    set area(newar) {
        this.radius = Math.sqrt(newar / Math.PI)
    }
    set diameter(newd) {
        this.radius = newd / 2
    }
    set circumference(newc) {
        this.radius = (newc / (Math.PI)) / 2
    }

}
let circle = new Circle(6)
circle.area = 100
circle.circumference = 200
circle.diameter = 36