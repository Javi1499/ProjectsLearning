import { VALID_LOADERS } from "next/dist/shared/lib/image-config";

export default function AddProductValidation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.company) {
    errors.company = "Company name is required";
  }
  if (!values.url) {
    errors.url = "product's url is required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "Url not valid";
  }
  if (!values.description) {
    errors.description = "Product description is required";
  }
  return errors;
}
