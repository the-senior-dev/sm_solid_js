// Before: A large component handling multiple responsibilities

function UserDashboard({ user }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your email is: {user.email}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => alert("Button clicked!")}>Click me!</button>
    </div>
  );
}

// After: Smaller, more focused functional components
function UserInfo({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your email is: {user.email}</h2>
    </div>
  );
}

function UserForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}

function UserInteractions() {
  return <button onClick={() => alert("Button clicked!")}>Click me!</button>;
}

function UserDashboard({ user }) {
  return (
    <div>
      <UserInfo user={user} />
      <UserForm />
      <UserInteractions />
    </div>
  );
}
