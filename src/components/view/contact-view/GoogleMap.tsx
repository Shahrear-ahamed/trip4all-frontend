import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.16882685256783!2d90.35835744249597!3d23.793651240947135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1697277025495!5m2!1sen!2sbd"
      width={"100%"}
      height="400"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
}
