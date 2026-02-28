import { ConfirmForgotPasswordCommand, ForgotPasswordCommand, ResendConfirmationCodeCommand } from "@aws-sdk/client-cognito-identity-provider";
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  ConfirmSignUpCommand,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const clientId = import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID;
const region = import.meta.env.VITE_AWS_REGION

const client = new CognitoIdentityProviderClient({
  region: region,
});

// Signup Function
const signUp = async (email: string, password: string) => {
  try {
    const command = new SignUpCommand({
      ClientId: clientId,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
      ],
    });

    return await client.send(command);
  } catch (err: unknown) {

    if (err instanceof Error) {
      console.error("Error name:", err.name);
      console.error("Error message:", err.message);

      throw err;
    }

    throw new Error("Failed to signup");
  }
};

const confirmUser = async (email: string, code: string, password?: string,) => {
  try {
    if (password) {
      return await handlePasswordReset(email, code, password);
    }
    const command = new ConfirmSignUpCommand({
      ClientId: clientId,
      Username: email,
      ConfirmationCode: code,
    });

    return await client.send(command);
  } catch (err: unknown) {

    if (err instanceof Error) {
      console.error("Error name:", err.name);
      console.error("Error message:", err.message);

      throw err;
    }

    throw new Error("Failed to signup");
  }
};

const login = async (email: string, password: string) => {
  try {
    const command = new InitiateAuthCommand({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: clientId,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    });

    return await client.send(command);
  } catch (err: unknown) {

    if (err instanceof Error) {
      console.error("Error name:", err.name);
      console.error("Error message:", err.message);

      throw err;
    }

    throw new Error("Failed to signup");
  }
};


export const resendCode = async (email: string) => {
  const command = new ResendConfirmationCodeCommand({
    ClientId: clientId,
    Username: email,
  });

  return await client.send(command);
};

const handlePasswordResetEmailNotification = async (email: string) => {
  const command = new ForgotPasswordCommand({
    ClientId: clientId,
    Username: email
  });

  return await client.send(command);
}

const handlePasswordReset = async (email: string, code: string, password?: string) => {
  const command = new ConfirmForgotPasswordCommand({
    ClientId: clientId,
    Username: email,
    ConfirmationCode: code,
    Password: password
  })

  return await client.send(command);
}

// const logout = async () => {
//   return await signOut();
// };

// const getToken = async () => {
//   const sesssion = await fetchAuthSession();
//   return sesssion?.tokens?.idToken?.toString();
// };

export { signUp, login, confirmUser, handlePasswordReset, handlePasswordResetEmailNotification };
