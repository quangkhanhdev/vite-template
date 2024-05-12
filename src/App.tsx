import {Button} from "./components/ui/button";

export default function App() {
  return (
    <div className="container my-6 grid grid-cols-4 place-items-center gap-[2.5rem]">
      <div className="col-span-full">
        <h1 className="text-center text-[5em] font-medium text-red-600">Hello World!</h1>
      </div>
      <div className="col-span-full">
        <Button className="bg-cyan-500 text-white ring-cyan-500">Click me!</Button>
      </div>
    </div>
  );
}
