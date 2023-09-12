import React from "react";
import { Form, redirect } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat,
        illo impedit voluptatum ex quasi, totam possimus reiciendis corrupti
        culpa odit distinctio voluptate nulla excepturi expedita eius,
        exercitationem atque non dolores. Laboriosam eligendi perferendis
        ducimus ut consequatur aperiam odio obcaecati quaerat aut, mollitia vel
        eveniet reprehenderit. Fugiat ipsam saepe consequuntur!
      </p>
      <Form action="post">
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button className="btn btn-sm bg-success text-white">
          Send message
        </button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  return redirect();
};
