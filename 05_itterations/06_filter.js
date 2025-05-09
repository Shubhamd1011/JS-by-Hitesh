/* 
When we store that forEach statement in the variable it return us undefined.
- It means foreach does not return a value.

When we give any condition on that time by using .filter we acces those. It means filter return only true values.
*/


let number = [1,2,3,4,5,6]

// const value = number.forEach((num)=>{
//    console.log(num);
//   return num;
// })
// console.log(value);  // op -----> undefined.


const less = number.filter( (num)=>{
  return num > 4  // it returns that true values
})
console.log(less); // op ----> [5,6] 

const books = [
  { title: "The Silent Patient", genre: "Thriller", publishYear: 2024 },
  { title: "Atomic Habits", genre: "Self-help", publishYear: 2021 },
  { title: "To Kill a Mockingbird", genre: "Classic", publishYear: 1975 },
  { title: "The Alchemist", genre: "Fiction", publishYear: 1956 },
  { title: "1984", genre: "Dystopian", publishYear: 1953 },
  { title: "The Power of Now", genre: "Spiritual", publishYear: 2022 },
  { title: "Sapiens", genre: "History", publishYear: 2023 },
  { title: "Rich Dad Poor Dad", genre: "Finance", publishYear: 1993 },
  { title: "The Great Gatsby", genre: "Classic", publishYear: 1925 },
  { title: "Educated", genre: "Memoir", publishYear: 2020 },
  { title: "The Hobbit", genre: "Fantasy", publishYear: 1937 },
  { title: "Becoming", genre: "Biography", publishYear: 2021 },
  { title: "The Subtle Art of Not Giving a F*ck", genre: "Self-help", publishYear: 2022 },
  { title: "Gone Girl", genre: "Mystery", publishYear: 2019 },
  { title: "Think and Grow Rich", genre: "Motivational", publishYear: 1937 },
  { title: "Dune", genre: "Science Fiction", publishYear: 1958 },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publishYear: 1997 },
  { title: "The Catcher in the Rye", genre: "Classic", publishYear: 1951 },
  { title: "Start With Why", genre: "Business", publishYear: 2018 },
  { title: "The Road", genre: "Post-Apocalyptic", publishYear: 2016 }
];

let userBooks = books.filter( (bk)=>{
  return bk.publishYear ===2016
})

userBooks = books.filter( (bk)=>{
  return bk.genre === "Fantasy"
})

console.log(userBooks);
