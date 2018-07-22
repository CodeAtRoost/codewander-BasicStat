define( ["qlik", "text!./template.html", "./lib/js/math"],
	function ( qlik, template, math ) {

		return {
			template: template,
			initialProperties: {
				qHyperCubeDef: {
					qMode:"S",
					qAlwaysFullyExpanded:true,
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 2,
						qHeight: 5000
					}]
				}
			},			
			definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions",
						min: 1,
						max: 1
					},
					measures: {
						uses: "measures",
						min: 1,
						max: 1
					},
					
					settings: {
						uses: "settings",
						items:{
							TitleColor:{
								type:"string",
								label:"Title Color",
								ref: "titleColor",
								expression:"never",
								defaultValue:"black"								
							},
							ValueColor:{
								type:"string",
								label:"Value Color",
								ref: "valueColor",
								expression:"never",
								defaultValue:"orange"								
							},
							FontSize:{
								type:"string",
								label:"Font Size (px)",
								ref: "fontSize",
								expression:"never",
								defaultValue:"18"								
							},
							/*DecimalPrecision:{
								type:"string",
								label:"Decimal Precision",
								ref: "decimalPrecision",
								expression:"never",
								defaultValue:"1"								
							},*/
							LineHeight:{
								type:"string",
								label:"Line Height",
								ref: "lineHeight",
								expression:"never",
								defaultValue:"2"								
							},
							LineBackground:{
								type:"string",
								label:"Line Background",
								ref: "linebgColor",
								expression:"never",
								defaultValue:"#d5f7b7"								
							},
							LineMargin:{
								type:"string",
								label:"Line Margin (px)",
								ref: "lineMargin",
								expression:"never",
								defaultValue:"2"								
							},
							Orientation:{
								type: "string",
								component: "dropdown",
								label: "Orientation",
								ref: "orientation",
								options: [{value:'1',label:'Vertical'},{value:'0',label:'Horizontal'}],
								defaultValue:'1'
							},
							Show:{
								component: "items",
								label: "Metric Display Options",
								items:{
									
									Header:{
										type: "boolean",
										component: "switch",
										label: "Show Header",
										ref: "showHeader",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									HeaderLabel:{
											type:"string",
											label:"Custom Header Label",
											ref: "headerLabel",
											expression:"never",
											defaultValue:""										
									},
									
									SampleCount:{
										component: "items",
										label: "",
										items:{
										Display:{
											type: "boolean",
											component: "switch",
											label: "Show Sample Count",
											ref: "sampleCount",
											options: [{
												value: true,
												label: "Yes"
											}, {
												value: false,
												label: "No"
											}],
											defaultValue: true	
										},
										Text:{
											type:"string",
											label:"Sample Count Label",
											ref: "sampleCountLabel",
											expression:"never",
											defaultValue:"Sample Count"											
										}
										}
									},
									Sum:{
										type: "boolean",
										component: "switch",
										label: "Show Sum",
										ref: "Sum",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									SumLabel:{
											type:"string",
											label:"Sum Label",
											ref: "sumLabel",
											expression:"never",
											defaultValue:"Sum"											
									},
									Mean:{
										type: "boolean",
										component: "switch",
										label: "Show Mean",
										ref: "Mean",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									MeanLabel:{
											type:"string",
											label:"Mean Label",
											ref: "meanLabel",
											expression:"never",
											defaultValue:"Mean"											
									},
									Median:{
										type: "boolean",
										component: "switch",
										label: "Show Median",
										ref: "Median",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									MedianLabel:{
											type:"string",
											label:"Median Label",
											ref: "medianLabel",
											expression:"never",
											defaultValue:"Median"											
									},
									Mode:{
										type: "boolean",
										component: "switch",
										label: "Show Mode",
										ref: "Mode",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									ModeLabel:{
											type:"string",
											label:"Mode Label",
											ref: "modeLabel",
											expression:"never",
											defaultValue:"Mode"											
									},
									Min:{
										type: "boolean",
										component: "switch",
										label: "Show Minimum Value",
										ref: "Min",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									MinLabel:{
											type:"string",
											label:"Min Label",
											ref: "minLabel",
											expression:"never",
											defaultValue:"Min"											
									},
									Max:{
										type: "boolean",
										component: "switch",
										label: "Show Max",
										ref: "Max",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									MaxLabel:{
											type:"string",
											label:"Max Label",
											ref: "maxLabel",
											expression:"never",
											defaultValue:"Max"											
									},
									StandardDeviation:{
										type: "boolean",
										component: "switch",
										label: "Show Standard Deviation",
										ref: "stdDev",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									StdLabel:{
											type:"string",
											label:"Standard Dev Label",
											ref: "stdLabel",
											expression:"never",
											defaultValue:"Standard Deviation"											
									},
									Variance:{
										type: "boolean",
										component: "switch",
										label: "Show Variance",
										ref: "Variance",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									VarianceLabel:{
											type:"string",
											label:"Variance Label",
											ref: "varianceLabel",
											expression:"never",
											defaultValue:"Variance"											
									}
								
								}
							}
							
							
						}
					}
					
					,
					
					sorting: {
						uses: "sorting"
					}
				}
			},
			
					
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function () {
				var invalidItems=[];
				var d=this.$scope.layout.qHyperCube.qDataPages[0].qMatrix;
				var max_item=[];
				var min_item=[];
				var statArray=[];
				var item_min=null;
				var item_max=null;
				for (var i=0; i<d.length;i++)
				{
					if (!isNaN(d[i][1].qNum)){
					if (item_min==null || d[i][1].qNum< item_min ){
						item_min= d[i][1].qNum;
						min_item=[];
						min_item.push(d[i][0].qText);
					}
					else if (d[i][1].qNum== item_min){
						min_item.push(d[i][0].qText);
					}
					else if (item_max==null || d[i][1].qNum> item_max ){
						item_max= d[i][1].qNum;
						max_item=[];
						max_item.push(d[i][0].qText);
					}
					else if (d[i][1].qNum== item_max){
						max_item.push(d[i][0].qText);
					}
					statArray.push(d[i][1].qNum);
					}
					else{
						invalidItems.push(d[i][0].qText);
					}
					
				}
				this.$scope.titleColor= this.$scope.layout.titleColor? this.$scope.layout.titleColor: "black";
				this.$scope.valueColor=this.$scope.layout.valueColor? this.$scope.layout.valueColor:"black";
				this.$scope.titleFontSize=this.$scope.layout.fontSize? this.$scope.layout.fontSize:"20";
				this.$scope.valueFontSize=this.$scope.layout.fontSize? this.$scope.layout.fontSize:"20";
				this.$scope.measureTitle=this.$scope.layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
				this.$scope.dimTitle=this.$scope.layout.qHyperCube.qDimensionInfo[0].qFallbackTitle;
				this.$scope.showHeader=this.$scope.layout.showHeader;
				this.$scope.HeaderLabel=this.$scope.layout.headerLabel =="" ? "Statistics for " + this.$scope.measureTitle + " by " + this.$scope.dimTitle : this.$scope.layout.headerLabel;
				this.$scope.lineHeight= this.$scope.layout.lineHeight;
				this.$scope.lineBackground= this.$scope.layout.linebgColor;
				this.$scope.lineMargin=this.$scope.layout.lineMargin;
				this.$scope.orientation=this.$scope.layout.orientation;
				this.$scope.invalidItems= invalidItems;
				
				var decimalPrecision=this.$scope.layout.decimalPrecision? this.$scope.layout.decimalPrecision:"1";
				var tot = Math.round((math.sum(statArray)*10*(decimalPrecision)))/(10*decimalPrecision);
				var mean = Math.round(math.mean(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var median= Math.round(math.median(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var mode = Math.round(math.mode(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var min = Math.round(math.min(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var max = Math.round(math.max(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var stdev=Math.round(math.std(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var variance = Math.round(math.var(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				this.$scope.summary_items=[];
				this.$scope.sampleCount=this.$scope.layout.sampleCount==null? true:this.$scope.layout.sampleCount;
				this.$scope.Sum=this.$scope.layout.Sum==null? true:this.$scope.layout.Sum;
				this.$scope.Mean=this.$scope.layout.Mean==null? true:this.$scope.layout.Mean;
				this.$scope.Median=this.$scope.layout.Median==null? true:this.$scope.layout.Median;
				this.$scope.Mode=this.$scope.layout.Mode==null? true:this.$scope.layout.Mode;
				this.$scope.Min=this.$scope.layout.Min==null? true:this.$scope.layout.Min;
				this.$scope.Max=this.$scope.layout.Max==null? true:this.$scope.layout.Max;
				this.$scope.stdDev=this.$scope.layout.stdDev==null? true:this.$scope.layout.stdDev;
				this.$scope.Variance=this.$scope.layout.Variance==null? true:this.$scope.layout.Variance;
				
				
				
				if( this.$scope.sampleCount) this.$scope.summary_items.push({"display":this.$scope.layout.sampleCountLabel, "value":d.length});
				if( this.$scope.Sum)this.$scope.summary_items.push({"display": this.$scope.layout.sumLabel, "value":tot});
				if( this.$scope.Mean)this.$scope.summary_items.push({"display": this.$scope.layout.meanLabel, "value":mean});
				if( this.$scope.Median)this.$scope.summary_items.push({"display": this.$scope.layout.medianLabel, "value":median});
				if( this.$scope.Mode)this.$scope.summary_items.push({"display": this.$scope.layout.modeLabel, "value":mode});
				if( this.$scope.Min){this.$scope.summary_items.push({"display": this.$scope.layout.minLabel, "value":min});
				this.$scope.summary_items.push({"display": this.$scope.layout.minLabel+ " Value Items", "value":min_item.toString()})}				
				if( this.$scope.Max){this.$scope.summary_items.push({"display": this.$scope.layout.maxLabel, "value":max});
				this.$scope.summary_items.push({"display": this.$scope.layout.maxLabel+" Value Items", "value":max_item.toString()})}
				if( this.$scope.stdDev)this.$scope.summary_items.push({"display": this.$scope.layout.stdLabel, "value":stdev});
				if( this.$scope.Variance)this.$scope.summary_items.push({"display": this.$scope.layout.varianceLabel, "value":variance});
				
				
				
				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {
				//add your rendering code here
				$scope.html = "Hello World";
				$scope.summary_items=[];
				$scope.orientation="V"
			}]
		};

	} );

