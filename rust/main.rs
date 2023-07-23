fn main() {
    println!("Waddup broskis! Starting up fizzbuzz!");

    for i in 1..20 {
        if i % 10 == 0 {
            println!("FizzBuzz");
        } else if i % 2 == 0 {
            println!("Fizz");
        } else if i % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", i);
        }
    }
}
