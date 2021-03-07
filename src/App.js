import logo from './logo.svg'
import "./App.css"
import AboutMe from "./components/aboutme"
import Menu from "./components/Menu"
function App() {
  let data = [
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription:
            "Meat and cheese layered between house-made pasta with bell peppers and onions.",
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: "Cheese-filled ravioli served with house red sauce.",
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Chicken Parmesan",
          itemDescription:
            "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti.",
        },
      ],
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "10",
          itemName: "Chocolate Lava Cake",
          itemDescription: "Dark chocolate molten lava cake. Serves 2-3.",
        },
        {
          itemId: 47,
          itemPrice: "8",
          itemName: "Tiramisu",
          itemDescription:
            "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder.",
        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Cannolis",
          itemDescription:
            "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips.",
        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots of espresso.",
        },
      ],
    },
  ]

  let list = [
    {
      listname:"Goals",
      listitems: [
        {
          goals:"Buy a house",
          itemDifficulty:"5/10",
        },
        {
          goals:"Secure a job working in web development",
          itemDifficulty:"6/10",
        },
        {
          goals:"get a pet cat",
          itemDifficulty:"1/10",
        },
        {
          goals:"exercise more",
          itemDifficulty:"2/10",
        },
        {
          goals:"Have a balanced work/life schedule",
          itemDifficulty:"10/10",
        },
      ] 
    }
  ]

  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {data.map((menu) => (
        <Menu {...menu}></Menu>
      ))}
      {list.map((goal) => (
        <AboutMe {...goal}></AboutMe>
      ))}
    </div>
  )
}

export default App