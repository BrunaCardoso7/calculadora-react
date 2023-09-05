import './Body'
import { Body, ConteinerCalculator } from './Body'
import { View, Resul, Val } from './View';
import { Conteiner, ButtonNum, ButtonsOper, ButtonEqu } from './Buttons';
function Calculator() {
    return ( 
        <ConteinerCalculator>
            <Body>
                <View>
                    <Val>10+10= </Val>
                    <Resul>20</Resul>
                </View>
                <Conteiner>
                    <ButtonsOper>(</ButtonsOper>
                    <ButtonsOper>)</ButtonsOper>
                    <ButtonsOper>%</ButtonsOper>
                    <ButtonsOper>AC</ButtonsOper>
                    <ButtonNum>1</ButtonNum>
                    <ButtonNum>2</ButtonNum>
                    <ButtonNum>3</ButtonNum>
                    <ButtonsOper>/</ButtonsOper>
                    <ButtonNum>4</ButtonNum>
                    <ButtonNum>5</ButtonNum>
                    <ButtonNum>6</ButtonNum>
                    <ButtonsOper>x</ButtonsOper>
                    <ButtonNum>7</ButtonNum>
                    <ButtonNum>8</ButtonNum>
                    <ButtonNum>9</ButtonNum>
                    <ButtonsOper>-</ButtonsOper>
                    <ButtonNum>0</ButtonNum>
                    <ButtonNum>.</ButtonNum>
                    <ButtonEqu>=</ButtonEqu>
                    <ButtonsOper>+</ButtonsOper>
                </Conteiner>
            </Body>
        </ConteinerCalculator>
     );
}

export default Calculator;