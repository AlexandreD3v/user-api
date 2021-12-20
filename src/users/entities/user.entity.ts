import {
        Entity,
        PrimaryGeneratedColumn,
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
      } from 'typeorm';

@Entity()
export class User {

        @PrimaryGeneratedColumn()
        id: number;

        @Column({ nullable: false })
        name: string;

        @Column({ nullable: true })
        phone: string;

        @Column({ nullable: false })
        cpf: string;

        @Column({ nullable: true })
        cep: string;

        @Column({ nullable: true })
        logradouro: string;

        @Column({ nullable: true })
        city: string;

        @Column({ nullable: true })
        state: string;
        
        @Column({ nullable: true })
        password: string;

        @CreateDateColumn({ nullable: true })
        createdAt: Date;
      
        @UpdateDateColumn({ nullable: true })
        updatedAt: Date;
      
        @DeleteDateColumn({ nullable: true })
        deletedAt: Date;
        
        @Column({ nullable: true, default: '' })
        salt: string;
      
        @Column({ nullable: true, type: 'varchar', length: 64 })
        confirmationToken: string;

        constructor(todo?: Partial<User>){
                this.id = todo?.id;
                this.name = todo?.name;
                this.phone = todo?.phone;
                this.cpf = todo?.cpf;
                this.cep = todo?.cep;
                this.logradouro = todo?.logradouro;
                this.city = todo?.city;
                this.state = todo?.state;
                this.password = todo?.password;
                this.createdAt = todo?.createdAt;
                this.updatedAt = todo?.updatedAt;
                this.deletedAt = todo?.deletedAt;
                this.id = todo?.id;
        }
}
