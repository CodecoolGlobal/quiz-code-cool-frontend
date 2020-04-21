let components = [CategoryProvider, AuthProvider];
let main = (
  <Router>
    <MenuProvider>
      <Header />
    </MenuProvider>
    <DisableRouteWhenAuthenticated exact path='/sign-in' component={AuthForm} />
    <DisableRouteWhenAuthenticated exact path='/sign-up' component={AuthForm} />
    <PrivateRoute exact path='/user' component={UserDetails} />
  </Router>
);

return components.reduce((prev, curr) => curr(prev), main);

// const arr = [1, 2, 3,545 434, 434];
// console.log(arr.reduce((prevs, curr) => prevs + curr, 0));

{
  /* <div>
    <span>
        <h1>
            Hello
        </h1>
    </span>
</div> */
}
