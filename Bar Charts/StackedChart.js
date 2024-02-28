class StackedBarChart{

    
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
        this.total = obj.total;
        this.data = obj.data;

        this.bottomYValue = obj.bottomYValue;
        this.topYValue = obj.topYValue;
        this.xValue = obj.xValue;

        this.bottomValueTitle=obj.bottomValueTitle;
        this.topValueTitle=obj.topValueTitle;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;


    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
         text(this.title, 0,-this.chartHeight - 60);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

       let topMaxValue = max(this.data.map(d => d[this.topYValue]))
       let bottomMaxValue = max(this.data.map(d => d[this.bottomYValue]))
       let totalMaxValue = (topMaxValue + bottomMaxValue)
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / totalMaxValue;

        console.log(totalMaxValue);
      

        // THis draws the horizontal elements
        push()
        translate(gap,0);


    print( this.data);
        for(let i=0; i<this.data.length; i++){
            push();
            fill(64,181,240);
            rect (0,0,this.barWidth, -this.data[i][this.bottomYValue]*scale);
            translate(0,-this.data[i][this.bottomYValue]*scale)
            fill(255,192,203)
            rect (0,0,this.barWidth, -this.data[i][this.bottomYValue,this.topYValue]*scale);
            pop();
            textSize(10)
            noStroke();
            fill(255, 249, 165);
            textAlign(LEFT, CENTER);
            push();
            translate(this.barWidth/2,10);
            rotate (45)
            text(labels[i],0,0);
            pop()
            translate(gap+this.barWidth,0)
            
        }
console.log(totalMaxValue)

        let sumTop = 0;
        let sumBottom= 0;
        for(let i=0; i<this.data.length;i++){
            sumTop += int(this.data[i].VALUE2019);
            sumBottom += int(this.data[i].VALUE2018);
        };
        let sumTotal= sumTop + sumBottom;
        console.log(sumTotal);


        let averageLine = sumTotal / this.data.length;
        stroke(255,0,0);
        line(0,-averageLine,-this.chartWidth,-averageLine)
        pop()
                // THis draws the vertical elements
            let tickGap = this.chartHeight/5;
                for(let i=0; i<=5; i++){
                    let tickNum =  totalMaxValue /5;
                    let tickValue = tickNum * i;
                    
                    stroke("#fff")
                    line(0,-i*tickGap,-20,-i*tickGap);
                    textSize(10)
                    noStroke();
                    fill(255, 249, 165);
                    textAlign(RIGHT,BOTTOM);
                    push();
                    translate(this.barWidth/2,10);
                    rotate (45)
                    pop()
                
                    text(round(tickValue),0,-i*tickGap)
                    ;
                }
        pop ();  
    }
}