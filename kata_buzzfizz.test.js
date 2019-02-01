const buzz = require("./kata_buzzfizz")

test("ตัวเลขมีจำนวนตั้งแต่ 1-100", ()=> {
    expect(buzz.doWork()).toBe(100)
})

test("ถ้าหารด้วย 3 ลงตัวให้แสดงข้อความ Fizz", ()=> {
    expect(buzz.fizzBuzz(3)).toBe("Fizz")
})

test("ถ้าหารด้วย 5 ลงตัวให้แสดงข้อความ Buzz", ()=> {
    expect(buzz.fizzBuzz(5)).toBe("Buzz")
})

test("ถ้าหารลงตัวทั้ง 5 และ 3 ให้แสดงข้อความ FizzBuzz", ()=> {
    expect(buzz.fizzBuzz(15)).toBe("FizzBuzz")
})

test("ถ้าหารทั้ง 5 และ 3 ไม่ลงตัวให้แสดงตัวเลขเดิม", ()=> {
    expect(buzz.fizzBuzz(1)).toBe(1)
})