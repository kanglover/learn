fn main() {
    let s1 = String::from("Hello");
    // 仅仅是引用 s1，不具有所有权
    let len = calc_len(&s1);

    println!("{}, length is {}", s1, len);

    let mut s2 = String::from("Hello");
    println!("{}, length is {}", s1, push_len(&mut s2));

    let mut string = String::from("Hello");
    let str1 = &mut string;
    // 不可以存在多个可变的引用
    // let str2 = &mut string;

    // 不能同时存在可变应用和非可变应用
    let str2 = &string;
    println!("{}, {}", str1, str2);
}

fn calc_len(s: &String) -> usize {
    s.len()
}

fn push_len(s: &mut String) -> usize {
    s.push_str(", world");
    s.len()
}