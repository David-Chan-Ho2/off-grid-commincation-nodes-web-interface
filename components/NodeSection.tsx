import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ILocation } from "@/types/location.types";
import { ChangeEvent, SubmitEvent, useState } from "react";

interface INodeSection {
  locations: ILocation[] | undefined;
}

function NodeSection({ locations }: INodeSection) {
  const [message, setMessage] = useState("");

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <section className="h-1/4 p-3">
      <form onSubmit={onSubmit}>
        <Input className="me-2 w-1/4" value={message} onChange={onChange} />
        <Button>Send</Button>
      </form>
      <ul>
        {locations?.map((location) => (
          <li key={location.label}>{location.label}</li>
        ))}
      </ul>
    </section>
  );
}

export default NodeSection;
