import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUpForm = z.object({
  restaurant: z.string(),
  managerName: z.string(),
  email: z.string().email(),
});

type signUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>();

  async function handleCreateAccount(data: signUpForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Restaurante criado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => {
          navigate("/sign-in");
        },
      },
    });
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-80 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar contra
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e acompanhe suas vendas!
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleCreateAccount)}
          >
            <Label htmlFor="restaurant">Nome do Estabelecimento</Label>
            <Input
              id="restaurant"
              type="text"
              placeholder="ACME Burguer"
              className="input"
              {...register("restaurant", { required: true })}
              required
            />
            <Label htmlFor="manager">Seu nome</Label>
            <Input
              id="manager"
              type="text"
              placeholder="Seu nome"
              className="input"
              {...register("managerName", { required: true })}
              required
            />
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Seu e-mail"
              className="input"
              {...register("email", { required: true })}
              required
            />

            <Button disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
              {isSubmitting ? "Autenticando" : "Finalizar cadastro"}
            </Button>

            <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">
              Ao continuar você concorda com os nossos{" "}
              <a href="#" className="underline underline-offset-4">
                termos de serviço
              </a>{" "}
              e{" "}
              <a href="#" className="underline underline-offset-4">
                política de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
