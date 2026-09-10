import { test, expect, vi } from "vitest";

// Simulando login lento
function loginLento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`BEM-VINDO, ${usuario.toUpperCase()}!`);
        }, 5000);
    });
}

test("simular login usando fake timers", async () => {
    // Ligando a máquina do tempo
    vi.useFakeTimers();
    console.log(`INICIANDO CENÁRIO DE TESTE ;D`);

    // Chamando promise do usuário sem await ainda
    const promessaLogin = loginLento("Dona Redonda");

    // Configura avanço de 5 segundos no tempo simulado
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    // Verificar resultado
    expect(resultado).toBe("BEM-VINDO, DONA REDONDA!");
    console.log("SUCESSO: teste realizado na velocidade da luz!");

    // Desligando a máquina do tempo (restaurando os timers reais)
    vi.useRealTimers();
});