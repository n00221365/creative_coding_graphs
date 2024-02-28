class HorizontalBarChart{
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;

        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

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
         textSize(50);
         fill(255);
        noStroke()
        textAlign(CENTER);
         text(this.title, this.chartWidth / 2,-450);
 
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
        strokeWeight(5)

        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartHeight - (this.data.length))/(this.data.length +25);
        let labels = this.data.map(d => d[this.yValue]);
        let scale = this.chartWidth / max(this.data.map(d => d[this.xValue]));
      

         // THis draws the horizontal elements
         push()
         translate(0,-this.chartHeight);
         for(let i=0; i<this.data.length; i++){
             fill(64,181,240);
             rect (0,i * gap, this.data[i][this.xValue]*scale,this.barWidth);
 
 
             textSize(25)
            
             noStroke();
             fill(255, 249, 165);
             textAlign( RIGHT, CENTER);
             
 
             let verticleGap = this.chartHeight/6;

             translate(this.barHeight);
             push()

             text(labels[i],-20,verticleGap);
            translate(50,100);
            pop();
             translate(0,gap+this.barWidth)
             
         }
         pop()
                 // THis draws the vertical elements
             let tickGap = this.chartWidth/5;
             let tickValue =  max(this.data.map(d => d[this.xValue])) /5
 
             
                 for(let i=0; i<=5; i++){
                     stroke("#fff")
                     line(i*tickGap,0,i*tickGap,20);
                     textSize(25)
            
                     noStroke();
                     fill(255, 249, 165);
                     textAlign(CENTER);
                     
         
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
