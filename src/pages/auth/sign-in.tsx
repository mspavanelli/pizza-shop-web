import { Loader, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Enviamos um link de autenticação para o seu e-mail.");
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-80 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              placeholder="E-mail"
              className="input"
              {...register("email", { required: true })}
              required
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              placeholder="Senha"
              className="input"
              {...register("password", { required: true })}
              required
            />
            <Button disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
              {isSubmitting ? "Autenticando" : "Acessar painel"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
