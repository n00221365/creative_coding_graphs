class HorStacked{

    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
        this.total = obj.total;
        this.data = obj.data;
        this.bottomXValue = obj.bottomXValue;
        this.topXValue = obj.topXValue;
        this.yValue = obj.yValue;
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
         textAlign(LEFT)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(LEFT)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

       let topMaxValue = max(this.data.map(d => d[this.topXValue]))
       let bottomMaxValue = max(this.data.map(d => d[this.bottomXValue]))
       let totalMaxValue = (topMaxValue + bottomMaxValue)
        let gap = 20;
        let labels = this.data.map(d => d[this.yValue]);
        let scale = this.chartWidth / (max(this.data.map(d => d[this.bottomXValue])) + max(this.data.map(d => d[this.topXValue])));

      

        // THis draws the horizontal elements
        push()
        translate(0,-this.chartHeight);

        for(let i=0; i<this.data.length; i++){
            fill(64,181,240);
            rect (0,gap,this.data[i][this.bottomXValue]*scale,this.barWidth);

            push()
            translate(this.data[i][this.bottomXValue]*scale,0)
            fill(255,192,203)
            rect (0,gap, this.data[i][this.topXValue]*scale,this.barWidth);
            pop()

            push();
            translate(0,-gap);
            textSize(10)
            noStroke();
            fill(255, 249, 165);
            textAlign(RIGHT);
            text(labels[i],-5,gap +35);

            pop()

            translate(0,gap+this.barWidth)
            
        }

        let sumTop = 0;
        let sumBottom= 0;
        for(let i=0; i<this.data.length;i++){
            sumTop += parseInt(this.data[i].MALEVALUE);
            sumBottom += parseInt(this.data[i].FEMALEVALUE);
        };
        let sumTotal= sumTop + sumBottom;


        let averageLine = sumTotal ;
        stroke(255,0,0);
        line(averageLine,-this.chartHeight+90,averageLine,0)
        pop()
                // THis draws the vertical elements
            let tickGap = this.chartWidth/5;
            let tickValue =  this.data.map(d => d[this.sumTotal]);
                for(let i=0; i<=5; i++){
                    stroke("#fff")
                    line(i*tickGap,0,i*tickGap,20);
                    textSize(10)
           
                    noStroke();
                    fill(255, 249, 165);
                    textAlign(LEFT,BOTTOM);
        
                    push();
                    translate(this.barWidth/2,10);
                    rotate (45)
                    pop()
                
                    text(round(tickValue*i),i*tickGap,40)
                    ;
                }
        pop (); 
    }
}

