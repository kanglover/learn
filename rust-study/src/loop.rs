fn main() {
    let mut number = 1;
    while number != 4 {
        println!("{}", number);
        number += 1;
    }
    println!("EXIT");


    let a = [10, 20, 30, 40, 50];
    for e in a.iter() {
        println!("值为 : {}", e);
    }

    let a = [10, 20, 30, 40, 50];
    for i in 0..a.len() {
        println!("a[{}] = {}", i, a[i]);
    }

    // 无限循环
    let s = ['R', 'U', 'N', 'O', 'O', 'B'];
    let mut i = 0;
    loop {
        let ch = s[i];
        if ch == 'O' {
            break;
        }
        println!("\'{}\'", ch);
        i += 1;
    }

    let location = loop {
        let ch = s[i];
        if ch == '0' {
            break i;
        }
        i += 1;
    };

    for number in (1..4).rev() {
        println!("{}", number);
    }
}