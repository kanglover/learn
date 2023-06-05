fn main() {
    // 存放在 heap 上
    let mut s = String::from("hello");
    s.push_str(", world");
    println!("{}", s);

    let s1 = String::from("hello");
    // 移动 s1
    let s2 = s1;
    // s1 被释放，无法再使用


    // Stack 上的复制
    let x = 1;
    // 实现了 copy
    let y = x;
    println!("{},{}", x, y);


    let ss = String::from("hello");
    // ss 发生移动
    take_ownership(ss);

    let z = 5;
    // 复制
    makes_copy(z);
    println!("{}", z);
}

fn take_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_number: i32) {
    println!("{}", some_number);
}