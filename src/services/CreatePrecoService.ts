
import { AppDataSource } from "src/database/datasource";
import Preco from "src/database/entities/Preco";

type PrecoRequest = {
  valor: number;
  dataInicioVigencia: Date;
  dataFimVigencia: Date;
  descricao: string;
}

export class CreatePrecoService {
  async execute({
    valor,
    dataInicioVigencia,
    dataFimVigencia,
    descricao,
  }: PrecoRequest): Promise<Preco> {
    const repo = AppDataSource.getRepository(Preco);
    /*if (await repo.findOne({ descricao })) {
      return new Error("Já existe");
    }*/
    const preco = repo.create({
      valor,
      dataInicioVigencia,
      dataFimVigencia,
      descricao,
    });
    await repo.save(preco);
    return preco;
  }
}