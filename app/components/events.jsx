'use client';
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button";
import OutputDisplay from "./outputDisplay";
import './events.css'

const Events = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="dual-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="textarea-container">
            <textarea
              className="textarea-field"
              placeholder=""
              rows={8}
              {...register("text", { required: true })}
            />
            <div className="separator-line"></div>
            <div className="button-container">
              <div onClick={handleSubmit(onSubmit)}>
                <Button />
              </div>
            </div>
          </div>
        </form>
      </div>
      <OutputDisplay content="" placeholder="Translation will appear here..." />
    </div>
  );
};

export default Events;
