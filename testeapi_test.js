import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecida Cano']

Deno.test("Teste de assertion (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Alan"])
})