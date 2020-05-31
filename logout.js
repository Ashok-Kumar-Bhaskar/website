function logout()
{
    localStorage.removeItem("user");
    window.location.replace("index.html");
}

function islogin()
{
    if("user" in localStorage)
    {
        return true;
    }
    else
    {
        window.location.replace("index.html");
        return false;
    }
}