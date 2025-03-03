//dark and light mode
modeToggle.addEventListener("click" , () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

//js code to keep user selected mode even page refresh of file reopen
    if(!body.classList.contains("dark")){
      localStorage.setItem("mode" , "light-mode");
    }else{
      localStorage.setItem("mode" , "dark-mode");
    }
  });