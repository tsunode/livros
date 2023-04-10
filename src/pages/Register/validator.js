import * as z from "zod";

export const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  cover: z.string().url("Deve ser uma url").nonempty("Capa é obrigatória"),
  published: z.string().nonempty("Data de publicação é obrigatória"),
  publishingCompany: z.string().nonempty("Editora é obrigatória"),
  numberPages: z.coerce.number().min(1, 'Deve ser maior ou igual a 1'),
  author: z.string().nonempty("Autor é obrigatório"),
});
