import{ jest, describe, expect, test} from '@jest/globals';
import request from "supertest";

const request = require ('supertest')

it("Deve retornar objeto com a resposta esperada", async() =>{
    const resposta = await request ('https://swapi.py4e.com/api/').get('/people/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Luke Skywalker');


});

it("Deve retormar mensagem de erro, quando buscar uma pessoa inesistente", async () => {
    const resposta = await request ('https://swapi.py4e.com/api/').get('/people/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({
        detaill:'Not found'
    });
});