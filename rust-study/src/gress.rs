use std::cmp::Ordering;
use std::io;

use rand::Rng;
fn main() {
    let secret_number = rand::thread_rng().gen_range(1..=6);

    loop {
        println!("输入一个数字");

        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("无法读取");

        println!("你猜测的数字{}", guess);

        // let guess: u32 = guess.trim().parse().expect("Please type a number!");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
