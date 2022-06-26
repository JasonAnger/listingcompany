import { FormProvider, useForm } from "react-hook-form";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from "react";

const ListingForm = () => {
  const toast = useToast({
    position: 'top'
  })
  const methods = useForm();
  const { handleSubmit } = methods;
  const [subscribeEmail, setSubscribeEmail] = useState(false)

  const toastSuccessful = () => {
    toast({
      title: 'Your company has been posted.',
      description: "We received your data and our sales team will contact you as soon as possible.",
      status: 'success',

      duration: 1000,
      isClosable: true,
    })
  }

  const onClickSubmit = async () => {
    const data = JSON.stringify({
      mutations: [
        {
          create: {
            _id: uuidv4(),
            _type: "company",
            name: "This is the test title",
            slug: {
              _type: "slug",
              current: slugify("This is the test title"),
            },
            owner: "",
            products: [],
            categories: [],
            publishedAt: new Date(),
            body: `This is the description`,
          },
        },
      ],
    })

    let config = {
      method: 'post',
      url: 'https://dl1tmeq6.api.sanity.io/v2021-06-07/data/mutate/production?tag=sanity.studio.document.publish&returnIds=true&visibility=sync',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer skNTHqZL5YaiCKnt1INAyJ7Cju1F13HWBa9eXK2GFWIFrWSVwp43OhuYEhD3UHg7qPGCMhHaSpjehxnFb5OQNy7hNi431qTDodOKBIBU37Y62Z3RZExTcWxFmb1LclDgZDHMIYm9vKWwuvKh2SUGcRkBcAvXDSYcSsckb3DVo5kchjN2afaz'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      toastSuccessful()
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className="add-listing py-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Listing your company
          </h2>
          <div className="mt-8 max-w-lg">
            <div className="grid grid-cols-1 gap-6">
              <label className="block w-full">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
              <label className="block w-full">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                />
              </label>
              <label className="block w-full">
                <span className="text-gray-700">Phone Number:</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
              <label className="block w-full">
                <span className="text-gray-700">
                  When you started your company?
                </span>
                <input
                  type="date"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
              <label className="block w-full">
                <span className="text-gray-700">
                  What type of company is it?
                </span>
                <select
                  className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Bla bla</option>
                  <option>Bla bla</option>
                  <option>Bla bla</option>
                  <option>Bla bla</option>
                </select>
              </label>
              <label className="block w-full">
                <span className="text-gray-700">Additional details</span>
                <textarea
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
              <div className="block w-full">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                        checked={subscribeEmail}
                        onClick={() => setSubscribeEmail(!subscribeEmail)}
                      />
                      <span className="ml-2">
                        Email me news and special offers
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onClickSubmit()}
                className="block w-full rounded bg-indigo-800 text-white font-bold py-3
              hover:border-indigo-300 hover:ring hover:ring-indigo-200 hover:ring-opacity-50"
              >
                Submit your company
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ListingForm;
