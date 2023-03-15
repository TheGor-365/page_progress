import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="progress"
export default class extends Controller {
  connect() {
    window.addEventListener("scroll", this.calculateProgress.bind(this))
  }

  calculateProgress() {
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progressPersent = (window.pageYOffset / totalHeight) * 100
    this.element.style.width = `${progressPersent}%`
  }
}
