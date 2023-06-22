import{

    assertNotEquals,

    assertStrictEquals,

    assertLessThan,

} from "http://deno.land/std/testing/asserts.ts"





Deno.test("Teste de diferente", () => {

    const frango = 20;

    const calabresa = 25;




    assertNotEquals(frango, calabresa);

})




Deno.test("Teste de diferente, valendo estritamente", () => {

    const doce = 20;

    const frango = "25";




    assertStrictEquals(frango, calabresa);

})




Deno.test("Teste de diferente, valendo estritamente", () => {

    const frango = 50;

    const frios = 25;




    assertLessThan(frango, calabresa);

})