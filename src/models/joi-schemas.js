import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const AdminSpec = Joi.object()
  .keys({
    admin: Joi.boolean().example(false).optional(),
  })
  .label("Admin");

export const UserCredentialsSpec = AdminSpec.keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const UserSpecUpdate = {
  firstName: Joi.string().allow("").optional(),
  lastName: Joi.string().allow("").optional(),
  password: Joi.string().allow("").optional(),
};

export const PlacemarkSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Fishing spot"),
    description: Joi.string().required().example("A nice spot to fish"),
    latitude: Joi.number().allow("").optional().example(12),
    longitude: Joi.number().allow("").optional().example(12),
    categoryid: IdSpec,
    img:  Joi.string().allow("").optional(),
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
  img: Joi.string().allow("").optional(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");

export const CategorySpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Fishing"),
    userid: IdSpec,
    placemarks: PlacemarkArraySpec,
  })
  .label("Placemark");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
    id: IdSpec,
  })
  .label("JwtAuth");

