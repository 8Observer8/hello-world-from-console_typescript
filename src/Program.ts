import HelloWorld from "./HelloWorld";

class Program
{
    public static Main(): void
    {
        document.getElementById("output").innerHTML = HelloWorld.GetHello();
    }
}

Program.Main();
