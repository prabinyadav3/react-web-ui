import { Welcome} from './Welcome';
import Button from './Button';
import { UserProfile } from './UserProfile';  
import { ContactForm } from './ContactForm'; 
import { Hello,HelloWithoutJSX } from './Hello';
import { StyleForm } from './StyleForm';  
import { CandidateProfile } from './CandidateProfile';  
import { Product } from './Product';
import { Greeting } from './Greeting'; 
import { CardWrapper } from './CardWrapper';  
import { UserDetails } from './UserDetails';
import { ProductList } from './ProductList';
import {NameList} from './NameList'; 
import { TodoList } from './TodoList';
import { Alert } from './Alert';
import {NewButton} from './NewButton';
import {CustomButton} from './CustomButton';
import {Newsletter} from './Newsletter'; 
import {Contact} from './Contact';
import { Menu } from './Menu';
import { Counter } from './Counter';
import { LoginCard } from './LoginCard';
import { SimpleCounter } from './SimpleCounter';
import { UserDashboard } from './UserDashboard';
import { PrevStateCounter } from './PrevStateCounter';
import { BatchingCounter } from './BatchingCounter';
import { ShoppingCart } from './ShoppingCart'; 
import { CounterWithReducer } from './CounterWithReducer';
import { ShoppingCartWithReducer } from './ShoppingCartWithReducer';
import { CounterWithInit } from './CounterWithInit';
import { CustomCounter } from './CustomCounter';
import './App.css'

function Login() {
  return <button>Login</button>;
 }   

function App() {
  return (
    <div>
      <CustomCounter /> 
      <CounterWithInit />
      <ShoppingCartWithReducer/>

      <CounterWithReducer />

      <ShoppingCart />
      <BatchingCounter />
      <PrevStateCounter />
      <SimpleCounter />

      <UserDashboard isPremium={true} />
      <UserDashboard isPremium={false} />

      <LoginCard />

      <Counter />
      <Counter />

      <Menu />
      
      <Contact />
      <Newsletter />

      <CustomButton text="Submit"/> 
      <CustomButton text="Like"/>
      <CustomButton text="Bookmark"/>

     


      <Alert type="success">Your changes have been saved successfully!</Alert> 
      <Alert type="error">Something went wrong!</Alert> 

      <NewButton />

      <TodoList />
      <NameList />
      <ProductList />
      
      <UserDetails name="Anish Yadav" isOnline={true} 
      isPremium={true} 
      isNewUser={true} 
      role="admin"
      />
      <UserDetails name="John Doe" isOnline={true} hideOffline={true} role="VIP" />
      
      <CardWrapper title="User Profile"> 
        <p>Anish</p>
        <p>prabinyadav.com.np</p>
        <button>Edit profile</button>
      </CardWrapper>

      <Greeting name="Alice" message="Welcome"/>
      <Greeting name="Bob"/>
      <Greeting message="Hello"/>
      <Greeting />

      <Product 
      title="Nitro Laptop" price={1999.99} inStock={true} categories={["Electronics", "Computers", "Laptops"]}
       />  

       <Welcome name="Anish Yadav" alias="AnishYadav"/>
       <Welcome name="John Doe" alias="JohnDoe"/>
       <Welcome name="Jane Smith" alias="JaneSmith"/>

      <CandidateProfile />
      <StyleForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
      <Login />
    </div>
  );
}

export default App;
