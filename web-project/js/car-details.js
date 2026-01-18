document.addEventListener("DOMContentLoaded", () => {

    const cars = {
        camry: {
            title: "تويوتا كامري 2024",
            image: "../images/cars/camry.jpg",
            price: "12,500$",
            model: "2024",
            engine: "2.5L بنزين",
            condition: "مستعملة - ممتازة",
            mileage: "20,000 كم",
            location: "صنعاء، اليمن",
            phone: "+967777123456"
        },
        sonata: {
            title: "هيونداي سوناتا 2023",
            image: "../images/cars/sonata.jpg",
            price: "11,000$",
            model: "2023",
            engine: "2.0L بنزين",
            condition: "مستعملة - ممتازة",
            mileage: "30,000 كم",
            location: "عدن، اليمن",
            phone: "+967700111222"
        },
        nissan: {
            title: "نيسان ألتيما 2022",
            image: "../images/cars/nissan.jpg",
            price: "9,800$",
            model: "2022",
            engine: "2.5L بنزين",
            condition: "مستعملة - جيدة جدًا",
            mileage: "45,000 كم",
            location: "تعز، اليمن",
            phone: "+967733444555"
        },
        bmw: {
            title: "BMW الفئة الخامسة 2021",
            image: "../images/cars/bmw.jpg",
            price: "18,500$",
            model: "2021",
            engine: "3.0L بنزين",
            condition: "مستعملة - ممتازة",
            mileage: "25,000 كم",
            location: "المكلا، اليمن",
            phone: "+967722333444"
        },
        suzuki: {
            title: "Suzuki XL-7 2023",
            image: "../images/cars/suzuki.jpg",
            price: "11,500$",
            model: "2023",
            engine: "1.5L بنزين",
            condition: "مستعملة - ممتازة",
            mileage: "18,000 كم",
            location: "إب، اليمن",
            phone: "+967711222333"
        }
    };

    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");

    if (!model || !cars[model]) {
        console.warn("Car not found:", model);
        return;
    }

    const car = cars[model];

    const titleEl = document.getElementById("carTitle");
    const imgEl = document.getElementById("carImage");
    const priceEl = document.querySelector(".car-price span");
    const specsEl = document.querySelector(".car-specs");
    const callBtn = document.querySelector(".call-btn");

    if (!titleEl || !imgEl || !priceEl || !specsEl || !callBtn) {
        console.warn("Car details elements missing in page");
        return;
    }

    titleEl.textContent = car.title;
    imgEl.src = car.image;
    priceEl.textContent = car.price;

    specsEl.innerHTML = `
        <div><strong>الموديل:</strong> ${car.model}</div>
        <div><strong>المحرك:</strong> ${car.engine}</div>
        <div><strong>الحالة:</strong> ${car.condition}</div>
        <div><strong>المسافة المقطوعة:</strong> ${car.mileage}</div>
        <div><strong>الموقع:</strong> ${car.location}</div>
        <div><strong>الهاتف:</strong> ${car.phone}</div>
    `;

    callBtn.href = `tel:${car.phone}`;
});
