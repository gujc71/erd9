var dataTypeUtil = {
  ccc17064457956121750: {
    oracle: {
        'NUMBER': 'Y',
        'FLOAT': 'Y',
        'BINARY_FLOAT': 'N',
        'BINARY_DOUBLE': 'N',
        'INTEGER': 'N',
        'CHAR': 'Y',
        'NCHAR': 'Y',
        'VARCHAR2': 'Y',
        'NVARCHAR2': 'Y',
        'LONG': 'N',
        'CLOB': 'N',
        'NCLOB': 'N',
        'BLOB': 'N',
        'DATE': 'N',
        'TIMESTAMP': 'N'
    },
    mariadb: {
        'TINYINT': 'N',
        'SMALLINT': 'N',
        'MEDIUMINT': 'N',
        'INT': 'N',
        'BIGINT': 'N',
        'FLOAT': 'N',
        'DOUBLE': 'N',
        'DECIMAL': 'Y',
        'CHAR': 'Y',
        'VARCHAR': 'Y',
        'TINYTEXT': 'N',
        'TEXT': 'N',
        'MEDIUMTEXT': 'N',
        'LONGTEXT': 'N',
        'VARBINARY': 'N',
        'TINYBLOB': 'N',
        'BLOB': 'N',
        'MEDIUMBLOB': 'N',
        'DATE': 'N',
        'TIME': 'N',
        'DATETIME': 'N',
        'TIMESTAMP': 'N',
        'YEAR': 'N'
    },
    mssql: {
        'TINYINT': 'N',
        'SMALLINT': 'N',
        'INT': 'N',
        'BIGINT': 'N',
        'DECIMAL': 'Y',
        'NUMERIC': 'Y',
        'MONEY': 'N',
        'SMALLMONEY': 'N',
        'FLOAT': 'N',
        'REAL': 'N',
        'CHAR': 'Y',
        'VARCHAR': 'Y',
        'TEXT': 'N',
        'NCHAR': 'Y',
        'NVARCHAR': 'Y',
        'NTEXT': 'N',
        'DATE': 'N',
        'TIME': 'N',
        'DATETIME': 'N',
        'DATETIME2': 'N',
        'SMALLDATETIME': 'N'
    }
  },
  dataTypeMatch: {
    oracle2mariadb: {
      'NUMBER(10)': 'INT',
      'NUMBER(19)': 'BIGINT',
      NUMBER: 'DECIMAL',
      FLOAT: 'FLOAT',
      BINARY_FLOAT: 'FLOAT', 
      BINARY_DOUBLE: 'DOUBLE',
      INTEGER: 'INT',
      CHAR: 'CHAR',
      NCHAR: 'NCHAR',
      VARCHAR: 'VARCHAR',
      VARCHAR2: 'VARCHAR',
      NVARCHAR2: 'NVARCHAR',
      LONG: 'LONGTEXT',
      CLOB: 'LONGTEXT',
      NCLOB: 'LONGTEXT',
      BLOB: 'LONGBLOB',
      DATE: 'DATETIME',
      TIMESTAMP: 'TIMESTAMP'
    },
    oracle2mssql: {
      NUMBER: 'NUMERIC',
      FLOAT: 'FLOAT',
      BINARY_FLOAT: 'FLOAT',
      BINARY_DOUBLE: 'FLOAT',
      INTEGER: 'NUMERIC(38)',
      CHAR: 'CHAR',
      NCHAR: 'NCHAR',
      VARCHAR: 'VARCHAR',
      VARCHAR2: 'VARCHAR',
      NVARCHAR2: 'NVARCHAR',
      LONG: 'VARCHAR(MAX)',
      CLOB: 'VARCHAR(MAX)',
      NCLOB: 'NVARCHAR(MAX)',
      BLOB: 'VARBINARY(MAX)',
      DATE: 'DATETIME',
      TIMESTAMP: 'DATETIME'
    },
    mariadb2oracle: {
      TINYINT: 'NUMBER(3,0)',
      SMALLINT: 'NUMBER(5,0)',
      MEDIUMINT: 'NUMBER(7,0)',
      INT: 'NUMBER(10,0)',
      BIGINT: 'NUMBER(19,0)',
      FLOAT: 'FLOAT',
      DOUBLE: 'FLOAT (24)',
      DECIMAL: 'NUMBER',
      CHAR: 'CHAR',
      VARCHAR: 'VARCHAR2',
      TINYTEXT: 'CLOB',
      TEXT: 'CLOB',
      MEDIUMTEXT: 'CLOB',
      LONGTEXT: 'CLOB',
      VARBINARY: 'BLOB',
      TINYBLOB: 'BLOB',
      BLOB: 'BLOB',
      MEDIUMBLOB: 'BLOB',
      DATE: 'DATE',
      TIME: 'DATE',
      DATETIME: 'DATE',
      TIMESTAMP: 'TIMESTAMP',
      YEAR: 'NUMBER(4,0)'
    },
    mariadb2mssql: {
      TINYINT: 'TINYINT',
      SMALLINT: 'SMALLINT',
      MEDIUMINT: 'INT',
      INT: 'INT',
      BIGINT: 'BIGINT',
      FLOAT: 'FLOAT',
      DOUBLE: 'FLOAT',
      DECIMAL: 'DECIMAL',
      CHAR: 'NCHAR',
      VARCHAR: 'NVARCHAR',
      TINYTEXT: 'NVARCHAR',
      TEXT: 'NVARCHAR',
      MEDIUMTEXT: 'NVARCHAR',
      LONGTEXT: 'NVARCHAR',
      VARBINARY: 'VARBINARY',
      TINYBLOB: 'VARBINARY',
      BLOB: 'VARBINARY',
      MEDIUMBLOB: 'VARBINARY',
      DATE: 'DATE',
      TIME: 'TIME',
      DATETIME: 'DATETIME2',
      TIMESTAMP: 'SMALLDATETIME',
      YEAR: 'SMALLINT'
    },
    mssql2oracle: {  
      NUMERIC: 'NUMBER',
      TINYINT: 'NUMBER(3)',
      SMALLINT: 'NUMBER(5)',
      INT: 'NUMBER(10)',
      BIGINT: 'NUMBER(19)',
      DECIMAL: 'NUMBER',
      MONEY: 'NUMBER(19,4)',
      SMALLMONEY: 'NUMBER(10,4)',
      FLOAT: 'BINARY_DOUBLE',
      REAL: 'BINARY_FLOAT',
      CHAR: 'CHAR',
      VARCHAR: 'VARCHAR2',
      TEXT: 'LONG',
      NCHAR: 'NCHAR',
      NVARCHAR: 'NVARCHAR2',
      NTEXT: 'LONG',
      DATE: 'DATE',
      TIME: 'TIMESTAMP',
      DATETIME: 'TIMESTAMP(3)',
      DATETIME2: 'TIMESTAMP',
      SMALLDATETIME: 'TIMESTAMP(3)'
    }, 
    mssql2mariadb: {
      NUMERIC: 'DECIMAL',
      TINYINT: 'TINYINT',
      SMALLINT: 'SMALLINT',
      INT: 'INT',
      BIGINT: 'BIGINT',
      DECIMAL: 'DECIMAL',
      MONEY: 'DECIMAL(15,4)',
      SMALLMONEY: 'DECIMAL(6,4)',
      FLOAT: 'FLOAT',
      REAL: 'REAL',
      CHAR: 'CHAR',
      VARCHAR: 'VARCHAR',
      TEXT: 'TEXT',
      NCHAR: 'CHAR',
      NVARCHAR: 'VARCHAR',
      NTEXT: 'TEXT',
      DATE: 'DATE',
      TIME: 'TIME',
      DATETIME: 'DATETIME',
      DATETIME2: 'DATETIME',
      SMALLDATETIME: 'DATETIME'
    },
  },

  getCCC17064457956128768s(dbms) {
    this.dbms = dbms;
    return this.ccc17064457956121750[dbms];
  },

  getCCC17064457956128768(sourceDB, sourceType, targetDB) {
    return this.dataTypeMatch[sourceDB+"2"+targetDB][sourceType];
  }

}

var ddd17064457956125209 = {
  // copy field from parent
  ccc17064457956118654 (sourceField, parent) {
    let newObj = {};
    
    for(let key in sourceField) {
	    if (key!=="id") newObj[key] = sourceField[key];
    }
    newObj.id = "f" + this.ddd17064457956134821();
	  newObj.parent = parent;
	  newObj.parentID = sourceField.id;
	  newObj.isFK = true;
    return newObj;
  },
  ccc17064457956123580 (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        var copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = this.ccc17064457956123580(obj[i]);
        }
        return copy;
    }

    if (typeof obj === 'object') {
        var copy = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = this.ccc17064457956123580(obj[key]);
            }
        }
        return copy;
    }
  },
  ddd17064457956134821() {
    const now = Date.now();
    const uniqueId = Math.floor(Math.random() * 10000);
    return now.toString() + uniqueId.toString();
  },
  ddd17064457956136516(inputString) {
    // 정규 표현식을 사용하여 문자열에서 숫자 부분을 추출
    var matches = inputString.match(/_(\d+)$/);
    
    // 숫자가 발견되면 값을 증가시키고 다음 값을 반환
    if (matches) {
        return inputString.replace(matches[0], "_" + (parseInt(matches[1])+1));
    } else {
        // 숫자가 없다면 "_1"을 추가하여 반환
        return inputString + "_1";
    }
  },
  ccc170644579562485(parent, classname) {
    const columns = ['Column Name', 'Comment', 'Data Type', 'Dafault', 'PK', 'UQ', 'NN', 'AI'];
    const widths = ['150px', '150px', '100px', '100px', '30px', '30px', '30px', '30px'];
    const hints = [null, null, null, null, 'Primary Key', 'Unique Index', 'Not Null', 'Auto Incremental'];

		const table = ddd17064457956125209.ccc17064457956231391(parent, "table");
    table.style.borderCollapse = "collapse";

		const thead = ddd17064457956125209.ccc17064457956231391(table, "thead");
		const tr = ddd17064457956125209.ccc17064457956231391(thead, "tr");

    for(let inx in columns) {
  		const th = ddd17064457956125209.ccc17064457956231391(tr, "th", null, columns[inx]);
      th.style.border = "1px solid #000";
      th.style.width = widths[inx];
      if (hints[inx]) th.title = hints[inx];
    };

		return ddd17064457956125209.ccc17064457956231391(table, "tbody", classname);
  },
  ccc17064457956287665(parentNode, tag, columns, sizes) {
    const row1 = document.createElement("tr");
    columns.forEach((columnData, index) => {
      const cell1 = document.createElement(tag);
      cell1.style.border = "1px solid #000";
      cell1.innerHTML = columnData;
      row1.appendChild(cell1);
      if (sizes) cell1.style.width=sizes[index];
    });
    parentNode.appendChild(row1);	
  },
  ccc17064457956231391(parentNode, tag, className, innerText){
    const newEle = document.createElement(tag);
    parentNode.appendChild(newEle);
    
    if (className) newEle.className = className;
    if (innerText) newEle.innerText = innerText;
      
    return newEle;
  }
  
}

"use strict";

const BBB17064457956042117 = {
	PHYSICAL: "physical",
	LOGICAL: "logical",
	MIXED: "mixed"
};
const BBB17064457956046389 = {
	E: "bbb17064457956063348",
	W: "bbb17064457956065581",
	S: "bbb17064457956066649",
	N: "bbb17064457956064979"
};
const BBB1706445795604769 = {
	BBB17064457956078040: "parent",
	BBB17064457956071105: "child"
};	

const BBB17064457956046431 = {
	BBB17064457956089410: "",
	BBB17064457956085497: "entity",
	BBB17064457956095072: "pk",
	BBB1706445795609969: "ak",
	TEXT: "text"
};	

const BBB17064457956055028 = {
	MARIADB: "mariadb",
	ORACLE: "oracle",
	MSSQL: "mssql"
};	


const BBB17064457956055856 = {
	BBB17064457956089410: "",
	SELECT: "s",
	BBB17064457956108196: "func",
	ccc1706445795608607: "m",
	BBB17064457956085497_MOVING: "move",
	BBB17064457956085497_RELATION: "relation"
};	

const BBB17064457956059299 = {
	BBB17064457956089410: null,
	POPUP: "p"
};

const BBB17064457956057004 = 15;

const bbb17064457956052290 = new Map;
const bbb17064457956059005 = new Map;
const bbb17064457956065496 = new Map;

class AAA17064457956027556 {
  constructor(parent, id, x, y) {
    this.parent = parent;
    this.id = id;
    this.x1 = x;
    this.y1 = y;
	this.x2 = 0;
	this.y2 = 0;
  }
  
  makeaaa17064457956034678() {}
  
  ccc17064457956125278() {
	  return {x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2}
  }

  selectaaa17064457956034678(ccc17064457956131213) {
	if (ccc17064457956131213) this.ccc17064457956131213 = ccc17064457956131213;
	if (!this.ccc17064457956131213) return;

	this.ccc17064457956131213.raise();
	this.ccc17064457956131213.attr("x", this.x1-15)
					.attr("y", this.y1-20)
					.attr("visibility", "visible");			
	this.ccc17064457956131213.selectAll("tspan")
		.attr("x", this.x1-15)
		.attr("visibility", "visible");

  }
  deselectaaa17064457956034678() {
	if (!this.ccc17064457956131213) return;
	this.ccc17064457956131213.attr("visibility", "hidden");			
	this.ccc17064457956131213.selectAll("tspan")
		.attr("visibility", "hidden");
	this.ccc17064457956131213 = null;
  }
}

/* -----------------------------------------------------------------------------------
 */
class AAA17064457956023974 extends AAA17064457956027556 {
  constructor(parent, x1, y1, id, text) {
	if (!id) id = "txt"  +  ddd17064457956125209.ddd17064457956134821();
	super(parent, id, x1, y1);

	this.id = id;
	this.parent = parent;
	this.data = text ? text : "Comments";

	this.g = svg.append("g").attr("id", this.id);
	this.fieldText = this.g.append("text")  
			.attr("id", id)
			.attr("x", this.x1)
			.attr("y", this.y1)
			.attr("font-size", "11px");	

	this.fieldRect = this.g.append("rect").classed("basicRectText", true);

	this._setSpanData();		
	this._setRect();

	bbb17064457956065496.set (this.id, this);		
	

	this.g.on("mousedown", function(){
		clickedaaa17064457956034678 = bbb17064457956065496.get(this.id);
		d3.select(this).raise();
	});	
  }
  _setRect(){
	const rt = this.g.node().getBoundingClientRect();
	this.fieldRect.attr("x", this.x1-2)
		.attr("y", this.y1 - 12)
		.attr("width", rt.width + 4)
		.attr("height", rt.height + 4);
  }

	ccc17064457956206601(ccc17064457956203613, ccc17064457956213394) {
		this.fieldText.selectAll("tspan").attr("x", this.x1+ccc17064457956203613);
		this.x1 += ccc17064457956203613;
		this.y1 += ccc17064457956213394;
		this.fieldText.attr("x", this.x1).attr("y", this.y1);
		this.fieldRect.attr("x", this.x1-2).attr("y", this.y1 - 12);

		super.selectaaa17064457956034678()
	}	
	ccc17064457956151322(x, y) {
		this.ccc17064457956206601(x - this.x1, y - this.y1);
	}

	getData(){
		return this.data;
	}

	ccc17064457956212577(text) {
		this.ccc17064457956219315(text);
	}

	ccc17064457956219315(text){
		this.data = text;
		this._setSpanData();
		this._setRect();
	}

	_setSpanData(){
		let spans = this.data.split("\n");
		this.fieldText.selectAll("tspan").remove();
		this.fieldText.selectAll("tspan")
			.data(spans)
			.enter()
			.append("tspan")
			.text(function(d) {return d.length===0 ? " " : d;})
			.attr("x", this.x1)
			.attr("dy", function(d, i) { return i===0 ? 0 : 20; });
	}

	removeaaa17064457956034678() {
		this.deselectaaa17064457956034678();

		this.fieldRect.remove();
		this.fieldText.remove();
		this.g.remove();
		bbb17064457956065496.delete(this.id);

		delete this;
	}

	selectaaa17064457956034678(ccc17064457956131213) {
		super.selectaaa17064457956034678(ccc17064457956131213);
		this.fieldRect.classed("selectedEntity", true);
	}
	deselectaaa17064457956034678() {
		super.deselectaaa17064457956034678();
		this.fieldRect.classed("selectedEntity", false);
	}
}


"use strict";

/* -----------------------------------------------------------------------------------
 */
class AAA17064457956022705 extends AAA17064457956027556 {
  constructor(parent, e1, e2, isSetKeys, relationType, id) { // isSetKeys: 키 필드 설정, relationType: pk /ak
	super();
	if (e1.ccc17064457956172542(e2) || e1 === e2) {
		alert("The relation is already established.");
		delete this;
		return;
	}
	if (!id) id = "r" + ddd17064457956125209.ddd17064457956134821();
	this.id = id;
	this.parent = parent;
	this.relationType = relationType;
	
	this.ccc17064457956146013(e1, e2, isSetKeys);
  }
	ccc17064457956146013(e1, e2, isSetKeys) {
		if (isSetKeys && e1.data) {
			e2.ccc17064457956224125(e1.data, this.relationType);
		}			

		const rt1 = e1.ccc17064457956125278();
		const rt2 = e2.ccc17064457956125278();
		
		// Angle between the centers of two entities
		let angle = this.ccc17064457956151867( rt1.x1+(rt1.x2-rt1.x1)/2, rt1.y1+(rt1.y2-rt1.y1)/2, rt2.x1+(rt2.x2-rt2.x1)/2, rt2.y1+(rt2.y2-rt2.y1)/2 ) -45;
		if (angle < 0) angle = 360 + angle;
		
		let ccc17064457956233664 = {};
		if (angle > 270) {
			this.ccc17064457956204100 = BBB17064457956046389.E;
			this.x1 = rt1.x2;
			this.y1 = rt1.y1 + Math.round((rt1.y2-rt1.y1) /2);
			this.x2 = rt2.x1;
			this.y2 = rt2.y1 + Math.round((rt2.y2-rt2.y1) /2);
			ccc17064457956233664 = this._ccc1706445795613514(this.x1, this.y1, this.x2, this.y2);
		} else 
		if (angle > 180) {
			this.ccc17064457956204100 = BBB17064457956046389.N;
			this.x1 = rt2.x1 + Math.round((rt2.x2-rt2.x1) /2);
			this.y1 = rt2.y2;
			this.x2 = rt1.x1 + Math.round((rt1.x2-rt1.x1) /2);
			this.y2 = rt1.y1;
			ccc17064457956233664 = this._ccc17064457956133638(this.x1, this.y1, this.x2, this.y2);
		} else 
		if (angle > 90) {
			this.ccc17064457956204100 = BBB17064457956046389.W;
			this.x1 = rt2.x2;
			this.y1 = rt2.y1 + Math.round((rt2.y2-rt2.y1) /2);
			this.x2 = rt1.x1;
			this.y2 = rt1.y1 + Math.round((rt1.y2-rt1.y1) /2);
			ccc17064457956233664 = this._ccc17064457956139814(this.x1, this.y1, this.x2, this.y2);
		} else {
			this.ccc17064457956204100 = BBB17064457956046389.S;
			this.x1 = rt1.x1 + Math.round((rt1.x2-rt1.x1) /2);
			this.y1 = rt1.y2-10;
			this.x2 = rt2.x1 + Math.round((rt2.x2-rt2.x1) /2);
			this.y2 = rt2.y1-10;
			ccc17064457956233664 = this._ccc17064457956142124(this.x1, this.y1, this.x2, this.y2);
		}

		// modify
		if (this.g) {
			this.relation
				  .data(ccc17064457956233664)
				  .attr("x1", function(d) { return d.x1; })
				  .attr("y1", function(d) { return d.y1; })
				  .attr("x2", function(d) { return d.x2; })
				  .attr("y2", function(d) { return d.y2; })			
			return;
		}
		const this_=this;
		// Create Relation to show
		this.g = this.parent.append("g").attr("id", this.id);
					
		this.relation = this.g.selectAll("line")
				  .data(ccc17064457956233664)
				  .enter()
				  .append("line")
				  .attr("x1", function(d) { return d.x1; })
				  .attr("y1", function(d) { return d.y1; })
				  .attr("x2", function(d) { return d.x2; })
				  .attr("y2", function(d) { return d.y2; })
				  .attr("stroke-dasharray", function(d, inx) { 
						if (this_.relationType===BBB17064457956046431.BBB1706445795609969 && inx<3) return 2;
					    return 0;
				  })				  
				  .classed("basicRectShape", true);

				  //this.relationType
		this.area = this.g.selectAll("rect")
				  .data(ccc17064457956233664.splice(0, 3))
				  .enter()
				  .append("rect")
				  .attr("x", function(d) { return Math.min(d.x1, d.x2)-2; })
				  .attr("y", function(d) { return Math.min(d.y1, d.y2)-2; })
				  .attr("width", function(d) { return Math.abs(d.x2-d.x1)+4; })
				  .attr("height", function(d) { return Math.abs(d.y2-d.y1)+4; })
				  .attr("stroke-width", 2)
				  .style("opacity", 0);
		this.g.on("mousedown", function(){
						clickedaaa17064457956034678 = bbb17064457956059005.get(this.id);
				  });					  

		e1.ccc17064457956141814(this);
		e2.ccc17064457956146274(this);
		
		this.ccc17064457956129725 = e1;
		this.ccc17064457956121730 = e2;
	}
	
	ccc17064457956172542(ccc17064457956121730) {
		return this.ccc17064457956121730 === ccc17064457956121730;
	}
	ccc17064457956176990(ccc17064457956129725) {
		return this.ccc17064457956129725 === ccc17064457956129725;
	}
	_ccc1706445795613514(ccc17064457956149290, ccc17064457956155099, ccc1706445795615310, ccc17064457956153118) {
		const middleX = ccc17064457956149290 + Math.round((ccc1706445795615310-ccc17064457956149290)/2);
		return [
		  { x1: ccc17064457956149290,  y1: ccc17064457956155099, x2: middleX, y2: ccc17064457956155099},
		  { x1: middleX, y1: ccc17064457956155099, x2: middleX, y2: ccc17064457956153118},
		  { x1: middleX, y1: ccc17064457956153118,   x2: ccc1706445795615310,    y2: ccc17064457956153118},
		  { x1: ccc17064457956149290+5,  y1: ccc17064457956155099-7, x2: ccc17064457956149290+5, y2: ccc17064457956155099+7}
		].concat(this.ccc17064457956204693(ccc1706445795615310 - BBB17064457956057004, ccc17064457956153118, 0));
	}	
	_ccc17064457956142124(ccc17064457956149290, ccc17064457956155099, ccc1706445795615310, ccc17064457956153118) {
		const middleY = ccc17064457956155099 + Math.round((ccc17064457956153118-ccc17064457956155099)/2);
		return [
		  { x1: ccc17064457956149290, y1: ccc17064457956155099,  x2: ccc17064457956149290, y2: middleY},
		  { x1: ccc17064457956149290, y1: middleY, x2: ccc1706445795615310,   y2: middleY},
		  { x1: ccc1706445795615310,   y1: middleY, x2: ccc1706445795615310,   y2: ccc17064457956153118},
		  { x1: ccc17064457956149290-7, y1: ccc17064457956155099+5,  x2: ccc17064457956149290+7, y2: ccc17064457956155099+5}
		].concat(this.ccc17064457956204693(ccc1706445795615310, ccc17064457956153118 - BBB17064457956057004, 90));
	}	
	_ccc17064457956139814(ccc17064457956149290, ccc17064457956155099, ccc1706445795615310, ccc17064457956153118) {
		const middleX = ccc17064457956149290 + Math.round((ccc1706445795615310-ccc17064457956149290)/2);
		return [
		  { x1: ccc17064457956149290,  y1: ccc17064457956155099, x2: middleX, y2: ccc17064457956155099},
		  { x1: middleX, y1: ccc17064457956155099, x2: middleX, y2: ccc17064457956153118},
		  { x1: middleX, y1: ccc17064457956153118,   x2: ccc1706445795615310,    y2: ccc17064457956153118},
		  { x1: ccc1706445795615310-5,  y1: ccc17064457956153118-7, x2: ccc1706445795615310-5, y2: ccc17064457956153118+7}
		].concat(this.ccc17064457956204693(ccc17064457956149290 + BBB17064457956057004, ccc17064457956155099, 180));
	}	
	_ccc17064457956133638(ccc17064457956149290, ccc17064457956155099, ccc1706445795615310, ccc17064457956153118) {
		const middleY = ccc17064457956155099 + Math.round((ccc17064457956153118-ccc17064457956155099)/2);
		return [
		  { x1: ccc17064457956149290, y1: ccc17064457956155099,  x2: ccc17064457956149290, y2: middleY},
		  { x1: ccc17064457956149290, y1: middleY, x2: ccc1706445795615310,   y2: middleY},
		  { x1: ccc1706445795615310,   y1: middleY, x2: ccc1706445795615310,   y2: ccc17064457956153118},
		  { x1: ccc1706445795615310-7, y1: ccc17064457956153118-15,  x2: ccc1706445795615310+7, y2: ccc17064457956153118-15}
		].concat(this.ccc17064457956204693(ccc17064457956149290, ccc17064457956155099 + BBB17064457956057004, 270));
	}	
	/*
	 * Relation의 끝점
	 */
	ccc17064457956204693(x, y, angle) {
		const angle1 = angle === 0 ? 340 : angle-20;
		return [
			  { x1: x,  y1: y, x2: Math.round(x + BBB17064457956057004 * Math.cos(this.ccc17064457956163680(angle1))),  y2: Math.round(y + BBB17064457956057004 * Math.sin(this.ccc17064457956163680(angle1)))},
		    //{ x1: arrowX,  y1: ccc17064457956153118,   x2: arrowX + BBB17064457956057004,    						 y2: ccc17064457956153118 + BBB17064457956057004 * Math.sin(toRadians(0))},
		      { x1: x,  y1: y, x2: Math.round(x + BBB17064457956057004 * Math.cos(this.ccc17064457956163680(angle+20))),y2: Math.round(y + BBB17064457956057004 * Math.sin(this.ccc17064457956163680(angle+20)))}
		]
	}
	
	ccc17064457956151322() {
		this.ccc17064457956146013(this.ccc17064457956129725, this.ccc17064457956121730);
	}

	ccc17064457956155887(relationType, ccc17064457956203613, ccc17064457956213394 ) {
		if ( (relationType===BBB1706445795604769.BBB17064457956078040 && (this.ccc17064457956204100===BBB17064457956046389.E || this.ccc17064457956204100===BBB17064457956046389.S)) ||
			 (relationType===BBB1706445795604769.BBB17064457956071105  && (this.ccc17064457956204100===BBB17064457956046389.W || this.ccc17064457956204100===BBB17064457956046389.N)) 
			){
			this.x1 += ccc17064457956203613;
			this.y1 += ccc17064457956213394;
		} else {
			this.x2 += ccc17064457956203613;
			this.y2 += ccc17064457956213394;
		}

		let ccc17064457956233664;
		switch(this.ccc17064457956204100) {
			case BBB17064457956046389.E: ccc17064457956233664 = this._ccc1706445795613514(this.x1, this.y1, this.x2, this.y2); break;
			case BBB17064457956046389.S: ccc17064457956233664 = this._ccc17064457956142124(this.x1, this.y1, this.x2, this.y2); break;
			case BBB17064457956046389.W: ccc17064457956233664 = this._ccc17064457956139814(this.x1, this.y1, this.x2, this.y2); break;
			case BBB17064457956046389.N: ccc17064457956233664 = this._ccc17064457956133638(this.x1, this.y1, this.x2, this.y2); break;
		}

		this.relation.data(ccc17064457956233664)
					.attr("x1", function(d) { return d.x1; })
					.attr("y1", function(d) { return d.y1; })
					.attr("x2", function(d) { return d.x2; })
					.attr("y2", function(d) { return d.y2; });

		this.area.attr("x", Math.min(this.x1, this.x2))
				 .attr("y", Math.min(this.y1, this.y2))
				 .attr("width",  Math.abs(this.x2-this.x1))
				 .attr("height", Math.abs(this.y2-this.y1));

		this.area.data(ccc17064457956233664.splice(0, 3))
				 .attr("x", function(d) { return Math.min(d.x1, d.x2)-2; })
				 .attr("y", function(d) { return Math.min(d.y1, d.y2)-2; })
				 .attr("width", function(d) { return Math.abs(d.x2-d.x1)+2; })
				 .attr("height", function(d) { return Math.abs(d.y2-d.y1)+2; });
		//console.info("x", this.x1, "y1", this.y1, "x", this.y2, "y2", this.y2);
	}
	
	ccc17064457956151867(x1, y1, x2, y2) {
	  var angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
	  
	  if (angle < 0) angle += 360;
	  
	  return angle;
	}
	
	ccc17064457956163680(degrees) {
	  return degrees * (Math.PI / 180);
	}
	removeaaa17064457956034678() {
		this.deselectaaa17064457956034678();	
		this.g.remove();
		bbb17064457956059005.delete(this.id);

		this.ccc17064457956129725.ccc17064457956169400(this);
		this.ccc17064457956121730.ccc17064457956166663(this);

		delete this;
	}

	selectaaa17064457956034678(ccc17064457956131213) {
		this.g.raise();
		this.relation.classed("selectedEntity", true);
		this.ccc17064457956121730.selectChildField(this.ccc17064457956129725.data.keys); 
		//this.ccc17064457956121730.ccc17064457956166663(this);

		if (ccc17064457956131213) this.ccc17064457956131213 = ccc17064457956131213;
		if (!this.ccc17064457956131213) return;
	
		let x = this.x1 + (this.x2-this.x1)/2;
		this.ccc17064457956131213.raise();
		this.ccc17064457956131213.attr("x", x)
					  .attr("y", this.y1 + (this.y2-this.y1)/2)
					  .attr("visibility", "visible");
	    this.ccc17064457956131213.selectAll("tspan")
			.attr("x", x)
			.attr("visibility", "visible");			
		this.ccc17064457956131213.selectAll("tspan")
			.filter(function(d, i) { return i === 1; })
			.attr("visibility", "hidden");
	}

	deselectaaa17064457956034678() {
		super.deselectaaa17064457956034678();	
		this.relation.classed("selectedEntity", false);
		this.ccc17064457956121730.deselectChildField ();
	}

	ccc17064457956285317() {
		let fields = this.ccc17064457956121730.getRelationFields(this.ccc17064457956129725);
		return {
			ccc17064457956231309: this.ccc17064457956121730.data.physicalName, 
			ccc17064457956231416: fields.ccc17064457956231416, 
			ccc17064457956237958: this.ccc17064457956129725.data.physicalName, 
			ccc17064457956249841: fields.ccc17064457956249841
		}
	}
	setRelationFields(ccc17064457956231416, ccc17064457956249841) {
		let isPK = false;
		for (var i = 0; i < ccc17064457956231416.length; i++) {
			const parentField = this.ccc17064457956129725.getMyField(ccc17064457956249841[i]);
			const childField  = this.ccc17064457956121730.setMyField(ccc17064457956231416[i], this.ccc17064457956129725.data.physicalName, parentField.id) 
			isPK = childField.isPK;
		}
		
		const relationType = isPK ? BBB17064457956046431.BBB17064457956095072 : BBB17064457956046431.BBB1706445795609969;
		this.relationType = relationType;
		this.relation.attr("stroke-dasharray", function(d, inx) { 
						if (relationType===BBB17064457956046431.BBB1706445795609969 && inx<3) return 2;
					    return 0;
				  })				
	}
}

"use strict";

const AAA17064457956034480 = 20; 
const AAA17064457956038858  = 100; 
const AAA17064457956042861 = 100; 		 // default height

class AAA17064457956029536 extends AAA17064457956027556 {
	static entityCount = 0;

  
  constructor(parent, x, y, id, data) {
	if (!id) id = "er" +  ddd17064457956125209.ddd17064457956134821();
    super(parent, id, x, y);
	
	if (data) {
		this.data = data;
  	} else {
		this.data = {};
		this.data.keys = [];
		this.data.fields = [];
		this.data.physicalName = "Table " + (++AAA17064457956029536.entityCount);
		this.data.logicalName  = this.data.physicalName;
	}
	this.data.allFields = this.data.keys.concat(this.data.fields);  // allFields는 존재하는 값이 아닌 keys + fields 참조

	this.makeaaa17064457956034678();
	this.ccc17064457956165273 = new Set;    // i'm child   (i===this)
	this.ccc17064457956171318 = new Set;		// i'm parent  (i===this)

	if (data) this.ccc17064457956219315(data)
  }
  
  makeaaa17064457956034678() {
		this.g = svg.append("g").attr("id", this.id);
		this.tableName = this.g.append("text")  
			.attr("x", this.x1)
			.attr("y", this.y1)
			.text(this.data.physicalName);
		   
		this.ccc1706445795621380 = this.g.append("rect")  
			.attr("x", this.x1)
			.attr("y", this.y1+5)
			.attr("width", 100)
			.attr("height", AAA17064457956034480)
			.classed("basicRectShape", true);

		this.keyFieldText = this.g.append("text")  
			.attr("x", this.x1)
			.attr("y", this.y1+AAA17064457956034480-1);	
				
		this.fieldRect = this.g.append("rect")  
			.attr("x", this.x1)
			.attr("y", this.y1+25)
			.attr("width", 100)
			.attr("height",AAA17064457956042861)
			.classed("basicRectShape", true);

		this.fieldText = this.g.append("text")  
			.attr("x", this.x1)
			.attr("y", this.y1+24);	
			
		this.x2 = this.x1 + this.g.node().getBoundingClientRect().width;
		this.y2 = this.y1 + this.g.node().getBoundingClientRect().height;			
		
		bbb17064457956052290.set (this.id, this);

		this.g.on("mousedown", function(){
			clickedaaa17064457956034678 = bbb17064457956052290.get(this.id);
			d3.select(this).raise();
	    });		
	}
	
	ccc17064457956146274(parentRelation) {
		this.ccc17064457956165273.add(parentRelation);
	}
	ccc17064457956141814(ccc1706445795617131) {
		this.ccc17064457956171318.add(ccc1706445795617131);
	}
	ccc17064457956166663(parentRelation) {
		this.ccc17064457956165273.delete(parentRelation);
	}
	ccc17064457956169400(ccc1706445795617131) {
		function ccc17064457956174232 (fields, id) {
			for (let fld in fields) {
				if (fields[fld].parentID === id) {
					fields[fld].parentID = null;
					fields[fld].parent = null;
					return;
				}
			}
		}
		this.ccc17064457956171318.delete(ccc1706445795617131);

		let ccc17064457956121730 = ccc1706445795617131.ccc17064457956121730;
		this.data.keys.forEach(function(myFld) {
			ccc17064457956174232 (ccc17064457956121730.data.keys, myFld.id);
			ccc17064457956174232 (ccc17064457956121730.data.fields, myFld.id);
		});			

		ccc17064457956121730.ccc17064457956229661();  // redraw
		ccc17064457956121730.ccc17064457956214368();
	}
	ccc17064457956172542(entity) {
		for (var relation of this.ccc17064457956165273) { 
			if (relation.ccc17064457956176990(entity)) return true;
		}	
		for (var relation of this.ccc17064457956171318) { 
			if (relation.ccc17064457956172542(entity)) return true;
		}		
		return false;
	}
	/**
	 * 위치 수정
	 * @param {*} ccc17064457956203613 : X 증가값
	 * @param {*} ccc17064457956213394 : Y 증가값
	 * @param {*} isReRelation : ccc17064457956151322()에서 ccc17064457956214368()를 호출해서 계산하기 때문에 2번 호출을 막기 위해 추가 
	 * @returns 
	 */
	ccc17064457956206601(ccc17064457956203613, ccc17064457956213394, isReRelation) {
		this.x1 += ccc17064457956203613;
		this.y1 += ccc17064457956213394;
		this.x2 += ccc17064457956203613;
		this.y2 += ccc17064457956213394;
		
		const children = this.g.selectChildren().nodes();
		
		for (var inx in children) { 
			let entity = d3.select(children[inx]);
			entity.attr("x", parseFloat(entity.attr("x")) + ccc17064457956203613).attr("y", parseFloat(entity.attr("y")) + ccc17064457956213394);
		}
		
		this.keyFieldText.selectAll("tspan").attr("x", this.x1+5);

		this.fieldText.selectAll("tspan").attr("x", this.x1+5);

		super.selectaaa17064457956034678();

		if (isReRelation) return;

		this.ccc17064457956165273.forEach(function(relation) {
			relation.ccc17064457956155887(BBB1706445795604769.BBB17064457956071105, ccc17064457956203613, ccc17064457956213394 );
		});	
		this.ccc17064457956171318.forEach(function(relation) {
			relation.ccc17064457956155887(BBB1706445795604769.BBB17064457956078040, ccc17064457956203613, ccc17064457956213394 );
		});	
	}	
	ccc17064457956151322(x, y) {
		this.ccc17064457956206601(x - this.x1, y - this.y1, true);
		this.ccc17064457956214368();
	}
	// recalculate for relation 
	ccc17064457956214368() {
		this.ccc17064457956165273.forEach(function(relation) {
			relation.ccc17064457956146013(relation.ccc17064457956129725, relation.ccc17064457956121730);
		});	
		this.ccc17064457956171318.forEach(function(relation) {
			relation.ccc17064457956146013(relation.ccc17064457956129725, relation.ccc17064457956121730);
		});			
	}

	ccc17064457956219315(data) {
		if (!data.keys)   data.keys = [];
		if (!data.fields) data.fields = [];
		
		this.data = data;
		this.data.allFields = data.keys.concat(data.fields);

		let getDataFunc = null;
		if (ccc17064457956208528 === BBB17064457956042117.LOGICAL) {
			this.tableName.text(data.logicalName ? data.logicalName : data.physicalName);		
			getDataFunc = this.showLogical;
		} else {
			this.tableName.text(data.physicalName);		
			getDataFunc = this.showPhysical;
		}
		
		// primary key fields
		this.keyFieldText.selectAll("tspan").remove();
		this.keyFieldText.selectAll("tspan")
		  .data(data.keys)
		  .enter()
		  .append("tspan")
		  .attr("id", function(d) { return d.id})
		  .text(function(d) { return getDataFunc(d)})
		  .attr("x", this.x1 + 5)
		  .attr("dy", function(d, i) { return i===0 ? 0 : 20; });
		
		let keyHeight = data.keys.length===0 ? AAA17064457956034480 : AAA17064457956034480 * data.keys.length;
		this.ccc1706445795621380.attr("height", keyHeight)
		
		// fields
		let fieldRectY1 = this.y1 + 5 + keyHeight;
		this.fieldRect.attr("y", fieldRectY1 );
		
		this.fieldText.attr("x", this.x1)
						.attr("y", fieldRectY1+15);	
			
		this.fieldText.selectAll("tspan").remove();
		this.fieldText.selectAll("tspan")
		  .data(data.fields)
		  .enter()
		  .append("tspan")
		  .attr("id", function(d) { return d.id})
		  .text(function(d) { return getDataFunc(d)})
		  .attr("x", this.x1 + 5)
		  .attr("dy", function(d, i) { return i===0 ? 0 : 20; });

		let fieldHeight = data.fields.length < 6 ? AAA17064457956042861 : AAA17064457956034480 * data.fields.length;
		this.fieldRect.attr("height", fieldHeight)

		// resize
		this.y2 = this.y1 + this.g.node().getBoundingClientRect().height;	
		let width = this.g.node().getBoundingClientRect().width;
		if (width>AAA17064457956038858){		
			width += 4;
			//width--;
			this.ccc1706445795621380.attr("width", width);
			this.fieldRect.attr("width", width);
			this.x2 = this.x1 + width;
		}
				
		this.ccc17064457956214368();
	}

	ccc17064457956212577 (data, ccc17064457956225331) {
		// 테이블 명이 수정되면 중복 확인
		let bbb17064457956225485TableName = false;
		if (data.physicalName!==this.data.physicalName) {
			for (const value of bbb17064457956052290.values()) {
				if (data.physicalName===value.data.physicalName) {
					alert ("there are same table name : " + data.physicalName);
					return "error";
			    }
			}
			bbb17064457956225485TableName = true;  
		} else {
			bbb17064457956225485TableName = data.logicalName!==this.data.logicalName
		}

		// check modified key field
		if (!ccc17064457956225331) ccc17064457956225331 = this.ccc17064457956224728 (this.data.keys, data.keys);
		let bbb17064457956225485Field = this.ccc17064457956224728 (this.data.fields, data.fields);

		// nothing modify
		if (!ccc17064457956225331 && !bbb17064457956225485Field && !bbb17064457956225485TableName) {
			if (data.indexes) this.data.indexes = data.indexes;
			return "nothing";
		}

		// update field infomaion
		this.ccc17064457956219315(data) ;

		// update key field of Child Entity
		if (!ccc17064457956225331) return "ok";

		this.ccc17064457956171318.forEach(function(relation) {
			relation.ccc17064457956121730.ccc17064457956173880(relation.relationType, relation.ccc17064457956129725.data.physicalName, data.keys);
		});			
		return "ok";
	}

	ccc17064457956173880(relationType, parentName, parentKeys) {
		// update or add key
		for (const parentInx in parentKeys) {
			let chk = false;
			let parentFld = parentKeys[parentInx];
			for (const myInx in this.data.allFields) {
				let myFld = this.data.allFields[myInx];
				chk = myFld.parentID === parentFld.id;
				if (chk) { // modify
					myFld.column   = parentFld.column;
					myFld.comment  = parentFld.comment;
					myFld.dataType = parentFld.dataType;
					myFld.defaultValue = parentFld.defaultValue;
					myFld.notNull = parentFld.notNull;
					break;
				}
			}
			// If it's not, add.
			if (!chk) {
				// check once more with column name
				for (const myInx in this.data.allFields) {
					let myFld = this.data.allFields[myInx];
					chk = myFld.column === parentFld.column;
					if (chk) break;
				}
				if (!chk) {
					if (relationType===BBB17064457956046431.BBB17064457956095072)
						 this.data.keys.push( ddd17064457956125209.ccc17064457956118654(parentFld, parentName) );
					else this.data.fields.push( ddd17064457956125209.ccc17064457956118654(parentFld, parentName) );
				}
			}	
		}
		// If it has been deleted from the parent(if not there), delete
		let removedKeys = [];
		this.data.allFields.forEach(function(myFld, myInx) {
			if (myFld.parent !== parentName) return;

			let chk = false;
			for (const inx in parentKeys) {
				chk = myFld.parentID === parentKeys[inx].id;
				if (chk) break;
			}
			// If it's not.
			if (!chk) removedKeys.push(myInx);
		});
		if (removedKeys.length > 0) {
			let newKeys = this.data.keys;
			for (var i=removedKeys.length-1; i>=0; i--) {
				newKeys.splice(removedKeys[i], 1);
			}
		}
		this.ccc17064457956212577 (this.data, true) ;
	}

	ccc17064457956224728 (data1, data2) {
		if (data1.length !== data2.length) return true;

		for (const inx1 in data1) {
			let isSame = null;
			let field1 = data1[inx1];
			for (const inx2 in data2) {
				let field2 = data2[inx1];
				if (field1.column === field2.column) {
					isSame = field1.comment === field2.comment   && field1.dataType === field2.dataType &&  
						     field1.defaultValue === field2.defaultValue && field1.notNull === field2.notNull;
					if (!isSame) return true;
					break;
				}
			}
			// there are no same field. -> modified
			if (isSame === null) return true;
		}
		return false;
	}
	
	// copy from parent's keys
	ccc17064457956224125(parentData, relationType) {
		if (!parentData.keys || parentData.keys.length===0) return;
		
		let tmpKeys = [];
		let my = this;

		parentData.keys.forEach(function(keyFld) {
			let field = my.getMyField(keyFld.column);
			if (!field) { // If not, add as FK
				tmpKeys.push( ddd17064457956125209.ccc17064457956118654(keyFld, parentData.physicalName) );
			} else
			if (!field.parent) { // If there is, but no parent, specify a parent
				field.parent = parentData.physicalName;
				field.parentID = keyFld.id;
				field.isFK = true;
			}
		});	
	
		if (relationType === BBB17064457956046431.BBB17064457956095072) 
			 this.data.keys   = this.data.keys.concat(tmpKeys);
		else this.data.fields = this.data.fields.concat(tmpKeys);

		this.ccc17064457956219315(this.data);
	}

		// recalculate for relation 
	ccc17064457956285317() {
		const relaionData = [];
		this.ccc17064457956165273.forEach(function(relation) {
			relaionData.push({id:relation.id, relationType:relation.relationType, pid: relation.ccc17064457956129725.id, cid:relation.ccc17064457956121730.id})
		});	
		this.ccc17064457956171318.forEach(function(relation) {
			relaionData.push({id:relation.id, relationType:relation.relationType, pid: relation.ccc17064457956129725.id, cid:relation.ccc17064457956121730.id})
		});	
		return relaionData;
	}
	
	getMyField(columnName) {
		for (const inx in this.data.allFields) {
			let field = this.data.allFields[inx];
			if (field.column === columnName) return field;
		}
		return null;
	}
	
	setMyField(columnName, parent, id) {
		for (const inx in this.data.allFields) {
			let field = this.data.allFields[inx];
			if (field.column === columnName) {
				field.parent = parent;
				field.parentID = id;
				return field;
			}
		}
		return null;
	}

	ccc17064457956229661() {
		if (!this.data) return;
		
		let getDataFunc = null;
		if (ccc17064457956208528 === BBB17064457956042117.LOGICAL) {
			this.tableName.text(this.data.logicalName);		
			getDataFunc = this.showLogical;
		} else {
			this.tableName.text(this.data.physicalName);		
			getDataFunc = this.showPhysical;
		}

		this.ccc1706445795621380.attr("width", AAA17064457956038858);
		this.fieldRect.attr("width", AAA17064457956038858);
		
		// primary key fields
		this.keyFieldText.selectAll("tspan")
		  .data(this.data.keys)
		  .text(function(d) { return getDataFunc(d)});
		
		this.fieldText.selectAll("tspan")
		  .data(this.data.fields)
		  .text(function(d) { return getDataFunc(d)});

		let width = this.g.node().getBoundingClientRect().width;
		width = (width>AAA17064457956038858) ? width+=5: width=AAA17064457956038858;
		
		this.ccc1706445795621380.attr("width", width);
		this.fieldRect.attr("width", width);
		this.x2 = this.x1 + width;
	}
	
	ccc17064457956222074(ccc17064457956197547, ccc17064457956192116) {
		if (!this.data || ccc17064457956208528 === BBB17064457956042117.LOGICAL || !this.data.allFields) return;

		const p = this.data.physicalName;
		this.data.allFields.forEach(function(myFld) {
			let dataType  = myFld.dataType;   	// varchar(10) -> varchar
			let dataExtra = "";					// varchar(10) -> (10)
			let match = myFld.dataType.match(/\(([^)]*)\)/);
			if (match) {
				dataExtra = match[0];
				dataType  = myFld.dataType.replace(dataExtra, '').trim();
			}

			let newType = ccc17064457956192116[dataType];
			if (newType) {
				//console.info(`${p}   -  ${myFld.dataType} = ${newType}`);
				myFld.dataType = newType + dataExtra;
				return;
			}
			newType = ccc17064457956197547[dataType];
			//console.info(`${p}   -  ${myFld.dataType} = ${newType}`);

			if (newType) 
				 myFld.dataType = newType + dataExtra;
			else myFld.dataType = "unknown";
		});		

		this.ccc17064457956229661();
	}

	showLogical(data) {
		return (data.comment ? data.comment: data.column) + (data.parentID ? " (FK)": "");
	}
	showPhysical(data) {
		return '%s : %s'.format(data.column+ (data.parentID ? " (FK)": ""), data.dataType.length < 21 ? data.dataType : data.dataType.substring(0,20) + "...  ");
	}

	selectaaa17064457956034678(ccc17064457956131213) {
		super.selectaaa17064457956034678(ccc17064457956131213);
		this.ccc1706445795621380.classed("selectedEntity", true);
		this.fieldRect.classed("selectedEntity", true);

		this.selected = true;
		if (!ccc17064457956131213) return;
		this.selected = true;
		
		for (var relation of this.ccc17064457956165273) { 
			relation.selectaaa17064457956034678(null);
		}	
		for (var relation of this.ccc17064457956171318) { 
			relation.selectaaa17064457956034678(null);
		}		
	}

	deselectaaa17064457956034678() {
		super.deselectaaa17064457956034678();
		this.ccc1706445795621380.classed("selectedEntity", false);
		this.fieldRect.classed("selectedEntity", false);
		this.deselectChildField ();

		if (!this.selected) return;

		for (var relation of this.ccc17064457956165273) { 
			relation.deselectaaa17064457956034678();
		}	
		for (var relation of this.ccc17064457956171318) { 
			relation.deselectaaa17064457956034678();
		}				
	}

	removeaaa17064457956034678() {
		this.deselectaaa17064457956034678();
		this.g.remove();
		bbb17064457956052290.delete (this.id);
		
		for (var relation of this.ccc17064457956165273) { 
			relation.removeaaa17064457956034678(this);
		}	
		for (var relation of this.ccc17064457956171318) { 
			relation.removeaaa17064457956034678(this);
		}
		delete this;
	}

	selectChildField (keys){
		const allFields = this.g.selectAll("text").selectAll("tspan");

		keys.forEach((keyField) => {
			this.data.allFields.forEach((field) => {
				if (field.parentID===keyField.id) {
					allFields.filter("#" + field.id).classed("selectedField", true);
					return false;
				}
			});
		});
	}
	deselectChildField (){
		this.g.selectAll("text").selectAll("tspan.selectedField").classed("selectedField", false);
	}


	getRelationFields(ccc17064457956129725) {
		let ccc17064457956231416 = [];
		let ccc17064457956249841 = [];
		for (var fld of this.data.allFields) { 
			if (fld.parent===ccc17064457956129725.data.physicalName) {
				let parent = this._getRelationFields(ccc17064457956129725, fld.parentID);
				if (!parent) {
					console.error(`no parent ${ccc17064457956129725.data.physicalName}-${fld.column}`);
					continue;
				}
				ccc17064457956231416.push(fld.column);	
				ccc17064457956249841.push(parent);	
			}
		}
		return {ccc17064457956231416:ccc17064457956231416.toString(), ccc17064457956249841:ccc17064457956249841.toString()};
	}
	_getRelationFields(ccc17064457956129725, parentID) {
		for (var fld of ccc17064457956129725.data.allFields) { 
			if (fld.id===parentID)
				return fld.column;
		}
		return null;
	}	
}

String.prototype.format = function() {
    var formatted = this, i = 0;
    while (/%s/.test(formatted))
    	formatted = formatted.replace("%s", arguments[i++]);
    return formatted;
}

var BBB17064457956103557, menuBar;

class BBB17064457956106099 {
  constructor(tbody, data, dbms) {
    this.dbms = dbms;
    this.tbody = tbody;
    
    data ? this.ccc17064457956212577(data) : this.BBB17064457956104345(5);

    tbody.node().addEventListener('click', this.handleCellClick.bind(this));
    
    this.sbFieldTypeList = d3.select(tbody.node().parentNode.parentNode).append("select")
                        .attr("multiple", "true")
                        .attr("class", "sbFieldTypeList")
                        .on("click", function() {
                            let childNodes = BBB17064457956103557.childNodes;
                            childNodes[2].innerText = d3.select(this).property("value");    
                            this.style.display = "none"    
                        });
    let sbFieldTypeList = this.sbFieldTypeList;

    this.sbFieldType = d3.select(tbody.node().parentNode.parentNode).append("div").text("v")
                        .style("display", "none")            
                        .attr("class", "sbFieldType")
                        .on("click", function() {
                            sbFieldTypeList.style("display", "block");
                        });                                    

    this._setCCC17064457956128768ByDBMS(dataTypeUtil.getCCC17064457956128768s(this.dbms));

    // this.sbFieldType.on("blur", function() {
    //     var selectedValue = d3.select(this).property("value");
    //     const cell = d3.select(this).node().parentNode; 
    //     cell.innerHTML =selectedValue;
    //     d3.select(this).style("display", "none");                
    //     d3.select("body").node().appendChild(this);
    // });

    const this_ = this;
    const BBB17064457956107301 = [{text:"↑", hint:"Move up"}, {text:"↓", hint:"Move down"}, {text:"+", hint:"Add Row"}, {text:"-", hint:"Remove Row"}];

    menuBar = d3.select(this.tbody.node().parentNode.parentNode).append("div")
                        .attr("class", "tableGrid_menuBar")
                        .style("display", "none");
    
    menuBar.selectAll("button")
        .data(BBB17064457956107301)
        .enter()
        .append("button")
        .text(function(d) { return d.text; })
        .attr("title", (function(d) { return d.hint; }))
        .on("click", function() {
            if (this.innerText==="↑") {    // move up
                BBB17064457956103557.parentNode.insertBefore(BBB17064457956103557, BBB17064457956103557.previousElementSibling);
            } else 
            if (this.innerText==="↓") { // move down
                BBB17064457956103557.parentNode.insertBefore(BBB17064457956103557.nextElementSibling, BBB17064457956103557);
            } else 
            if (this.innerText==="+") { // insert 
        
                const newRow = BBB17064457956103557.parentNode.insertRow(BBB17064457956103557.rowIndex);
                this_.BBB17064457956107978(d3.select(newRow), {}, false);
                //for (var i=0; i<BBB17064457956103557.cells.length; i++) newRow.insertCell(0);
            } else 
            if (this.innerText==="-") {    // delete
                // can not remove if field is FK
                if (BBB17064457956103557.getAttribute('data-parent')) return;

                BBB17064457956103557.parentNode.deleteRow(BBB17064457956103557.rowIndex-1);
                BBB17064457956103557 = null;
                menuBar.style("display", "none");                    
            } 
        });            
  }

  _setCCC17064457956128768ByDBMS(dataTypeList) {
    this.sbFieldTypeList.selectAll("option").remove();
    this.sbFieldTypeList.selectAll("option")
        .data(Object.keys(dataTypeList))
        .enter()
        .append("option")
        .attr("value", function(d) { 
        if ("Y"===dataTypeList[d]) return d + " ()";
        return d; 
      })
      .text(function(d) { return d; });
  }

  BBB17064457956104345(rowCount) {
    for (let i = 0; i < rowCount; i++) {
        this.BBB17064457956107978(this.tbody.append("tr"), {}, false);
    };
  }

  ccc17064457956212577(data, dbms) {
    BBB17064457956103557 = null;
    menuBar.style("display", "none");    
    this.sbFieldType.style("display", "none");
    this.sbFieldTypeList.style("display", "none");    
    
    if (this.dbms!==dbms) {
      this.dbms=dbms;
      this._setCCC17064457956128768ByDBMS(dataTypeUtil.getCCC17064457956128768s(this.dbms));
    }

    this.tbody.style("user-select", "none");
    const childElements = this.tbody.selectAll("tr");
    childElements.remove();

    this.data = data;
    let this_=this;  
    this.data.keys.forEach(function (field) {
        this_.BBB17064457956107978(this_.tbody.append("tr"), field, true);
    });
    this.data.fields.forEach(function (field) {
        this_.BBB17064457956107978(this_.tbody.append("tr"), field, false);
    });
    
    if (data.keys.length+data.fields.length===0 ) 
      this.BBB17064457956107978(this.tbody.append("tr"), {}, false);

    d3.select(".tableindexList").selectAll("li").remove();
    if (!data.indexes) return;
    d3.select(".tableindexList").selectAll("li")
          .data(data.indexes)
          .enter()
          .append("li")
          .attr("id", function(d) {return "inx" + d.name})
          .html(function(d) {return `<span class="delete-icon">x </span> ${d.name} (${d.fields})`; })
          .on("click", handleIndexSelect);
  }

  BBB17064457956107978(tr, field, isKey) {
      tr.attr('data-id', field.id);

      tr.append("td").text(field.column);
      tr.append("td").text(field.comment);
      tr.append("td").text(field.dataType);
      tr.append("td").text(field.defaultValue);

      const keyIn = tr.append("td").style("padding-left", "8px").append("input").attr("type", "checkbox");
      if (isKey) keyIn.attr("checked", "checked");

      const uniqueKey = tr.append("td").style("padding-left", "8px").append("input").attr("type", "checkbox");
      if (field.uniqueKey) uniqueKey.attr("checked", "checked");

      const notNull = tr.append("td").style("padding-left", "8px").append("input").attr("type", "checkbox");
      if (field.notNull) notNull.attr("checked", "checked");

      const ai = tr.append("td").style("padding-left", "8px").append("input").attr("type", "checkbox");
      if (field.ai) ai.attr("checked", "checked");

      // FK field cannot be modified.
      if (field.parent) {
        tr.attr('data-parent', field.parent);
        tr.attr('data-parentID', field.parentID);
        keyIn.attr('disabled', 'disabled');
        uniqueKey.attr('disabled', 'disabled');
        notNull.attr('disabled', 'disabled');
        ai.attr('disabled', 'disabled');
      }
  }
  
  handleCellClick(event) {
    this.sbFieldType.style("display", "none");
    this.sbFieldTypeList.style("display", "none");    

    const cell = event.target;
    if (cell.nodeName !== "TD") return;
    
    // row(tr) select
    if (BBB17064457956103557) BBB17064457956103557.classList.remove("selectRow");
    BBB17064457956103557 = cell.parentNode;
    BBB17064457956103557.classList.add("selectRow");
    menuBar.style("display", "block").style("top", (event.clientY+10) + "px").style("left", (event.clientX+10) + "px");
    
    // can not modify if field is FK
    if (BBB17064457956103557.getAttribute('data-parent')) {
        return;
    }

    const cell4d3 = d3.select(cell);

    // other column : : input box
    const inputBox = cell4d3.select("input");
    if (inputBox.size() > 0) return;

    const cell4d3Value = cell4d3.text();
    cell4d3.text("");

    const inputElement = cell4d3.append("input")
      .attr("type", "text")
      .attr("class", "input-cell")
      .property("value", cell4d3Value)
      .on("keydown", (event) => {
        if (event.key !== "Enter") return;
        event.target.parentNode.innerText = event.target.value;
        event.target.remove();
      })
      .on("blur", (event) => {
        event.target.parentNode.innerText = event.target.value;
        event.target.remove();
      });

    inputElement.node().select();
    inputElement.node().focus(); // 입력 상자에 포커스 설정

    if (cell.cellIndex===2) {
        // field type column : select box 
        this.handleSelectbox(cell4d3);
    }
  }
  
  // show select box for field Type
  handleSelectbox(cell) {
    if (cell.select("select").size() > 0) return;

    var cellValue = cell.text();
    if (cellValue==="") cellValue ="varchar";
    //this.sbFieldType.property('value', cellValue);

    
    //cell.html("");
    //cell.node().appendChild(this.sbFieldType.node());
    
    this.sbFieldType.style("display", "block")            
    var rect = cell.node().getBoundingClientRect();
    this.sbFieldType.style("top", (rect.top+3) + "px");
    this.sbFieldType.style("left", (rect.right-20) + "px" );

    this.sbFieldTypeList.style("top",rect.bottom + "px");
    this.sbFieldTypeList.style("left", rect.left + "px" );
  } 

  // getCellCoordinates(cell) {
  //   var rect = cell.getBoundingClientRect();
    
  //   var top = rect.top + window.scrollY;
  //   var left = rect.left + window.scrollX;
  //   var bottom = rect.bottom + window.scrollY;
  //   var right = rect.right + window.scrollX;
      
  // }

  // grid to json
  BBB17064457956117493() {
    let keys = [];
    let fields = [];
    var rows = this.tbody.selectAll("tr");
    rows.each(function(d, i) {
        var cells = d3.select(this).selectAll("td").nodes();
        let column = cells[0].innerText.trim();
        if (column==="") return;

        let defaultValue = cells[3].innerText.trim();
        if (defaultValue) defaultValue = parseInt(defaultValue);

        let id = this.getAttribute('data-id');
        let fieldInfo = {};
        fieldInfo.id     = id ? id : "f" + ddd17064457956125209.ddd17064457956134821();
        fieldInfo.column = column;//cells[0].innerText.trim();
        fieldInfo.comment = cells[1].innerText.trim();
        fieldInfo.dataType = cells[2].innerText.trim();
        fieldInfo.defaultValue = defaultValue;
        fieldInfo.parent = this.getAttribute('data-parent');
        fieldInfo.parentID = this.getAttribute('data-parentID');

        const cb2 = cells[5].querySelector('input[type="checkbox"]')
        fieldInfo.uniqueKey = cb2.checked;
        const cb3 = cells[6].querySelector('input[type="checkbox"]')
        fieldInfo.notNull = cb3.checked;
        const cb4 = cells[7].querySelector('input[type="checkbox"]')
        fieldInfo.ai = cb4.checked;

        
        const cb1 = cells[4].querySelector('input[type="checkbox"]')
        if (cb1.checked) 
             keys.push (fieldInfo);
        else fields.push (fieldInfo);
    });
    
    let indexes = [];
    d3.select(".tableindexList").selectAll("li").each(function(d, i) {
      indexes.push(d);
    });

    return {'keys': keys, 'fields':fields, indexes: indexes};        
  }
}

class BBB17064457956116094 {
  constructor(BBB1706445795611926, version) {
    this.BBB1706445795611926 = BBB1706445795611926;
    this.version = version;
    this.db = null;
  }

  open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.BBB1706445795611926, this.version);

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };

      request.onerror = function(event) {reject("An error occurred while opening IndexedDB.");};
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("storeFile", { keyPath: "fileId" });
        objectStore.createIndex("updateDate", "updateDate", { unique: false });
      };
    });
  }

  BBB17064457956111052(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["storeFile"], "readwrite");
      const objectStore = transaction.objectStore("storeFile");

      data.updateDate = Date.now();

      const getRequest = objectStore.get(data.fileId);

      getRequest.onsuccess = () => {
        const existingData = getRequest.result;

        if (existingData) {
		      if (data.data) existingData.data = data.data; 
          const updateRequest = objectStore.put(existingData);

          updateRequest.onsuccess = () => {resolve("Data has been updated.");};
          updateRequest.onerror = () => {reject("An error occurred while updating data.");};
        } else {
		      data.createDate = Date.now();

          const addRequest = objectStore.add(data);

          addRequest.onsuccess = () => {resolve("Data has been added.");};
          addRequest.onerror = () => {reject("An error occurred while adding data.");};
        }
      };

      getRequest.onerror = () => {reject("An error occurred while fetching data.");};
    });
  }

  remove(key) {
	  console.log(key);
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["storeFile"], "readwrite");
      const objectStore = transaction.objectStore("storeFile");

      const request = objectStore.delete(key);

      request.onsuccess = () => {resolve("Data has been removed.");};
      request.onerror = () => {reject("An error occurred while removing data.");};
    });
  }

  get(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["storeFile"], "readonly");
      const objectStore = transaction.objectStore("storeFile");

      const request = objectStore.get(key);

      request.onsuccess = () => {
        const result = request.result;
        resolve(result);
      };

      request.onerror = () => {reject("An error occurred while fetching data.");};
    });
  }

  BBB17064457956115391() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["storeFile"], "readonly");
      const objectStore = transaction.objectStore("storeFile");
      const index = objectStore.index("updateDate");

	  const request = index.getAll();
	 
	  request.onsuccess = () => {
        const results = request.result.map(({ fileId, fileName, fileSize, updateDate, entityCount, relationCount }) => ({ fileId, fileName, fileSize, updateDate, entityCount, relationCount }));
        resolve(results);
      };

      request.onerror = () => {reject("An error occurred while fetching sorted data by update date.");};
    });
  }
  
  close() {
    if (this.db)
    this.db.close();
    this.db = null;
  }
  // ================================================================
  save(data) {
	  this.open()
      .then(() => {
        this.BBB17064457956111052(data)
      })
      .then(() => {
        this.close();
      })
      .catch((error) => {
        alert(error);
        this.close();
      });
  }
  
  removeFile(key) {
    this.open()
      .then(() => {
        this.remove(key);
      })
      .then(() => {
        this.close();
      })
      .catch((error) => {
        alert(error);
        this.close();
      });
  }
  
  updateFile(key) {
    const data1 = { fileId: key, fileSize:  Math.floor(Math.random() * 10000) };
    this.open()
      .then(() => {
        this.BBB17064457956111052(data1);
      })
      .then(() => {
        this.close();
      })
      .catch((error) => {
        alert(error);
        this.close();
      });
  }

  selectAll(callback) {
    this.open()
      .then(() => {
        return this.BBB17064457956115391();
      })
      .then((results) => {
        if (!results) return;
        callback (results);
        this.close();
      })
      .catch((error) => {
        alert(error);
        this.close();
      });
  }

}

let ccc17064457956239298;


function showTableDialog() {
	if (ccc17064457956221214("tableDialog")) {
		d3.select("#editIndexBtn").text("index");
		d3.select(".erd9Dialog-grid1").style("display", "");
		d3.select(".erd9Dialog-grid2").style("display", "none");		
		return;
	}
	let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "");
	dialogContent.style("width", "650px");

	var div = dialogContent.append("div").html("<span>Table Name:</span><input type='text' id='tableName' maxlength='50' style='margin-left: 27pt;'/><br/>Table Comments: <input type='text' id='tableComments' maxlength='50' />").attr("class", "tablename");
	div.append("button").attr("id", "editIndexBtn").text("index").on("click", changeTableEditorMode);

	var grid = dialogContent.append("div").attr("class", "erd9Dialog-grid1 erd9Dialog-grid");
	ddd17064457956125209.ccc170644579562485(grid.node(), "tablegrid-tbody");

	// index tab
	var grid = dialogContent.append("div").attr("class", "erd9Dialog-grid2 erd9Dialog-grid").style("display", "none");
	var grid1 = grid.append("div").attr("class", "tableIndexGrid");
	var grid2 = grid.append("div").attr("class", "tableIndexGrid").style("margin-left", "5px");
	var table = grid1.append("table");
	var thead = table.append("thead").append("tr");
	thead.append("th").style("width", "150px").text("Column Name");
	thead.append("th").style("width", "100px").text("Comments");
	let tbody = table.append("tbody").attr("class", "tableIndexGrid-tbody")
	tbody.node().addEventListener('click', this.handleIndexCellClick.bind(this));

	grid2.html("<p>Index Name: <input type='text' id='indexeName' maxlength='50' /></p>");
    let indexcolumnul = grid2.append("ul").attr("class", "indexcolumnul").node();
	grid2.append("button").text("add").on("click", handleIndexAdd);
    grid2.append("ul").attr("class", "tableindexList");

	let draggedItem = null;
	indexcolumnul.addEventListener("dragstart", (e) => {
		draggedItem = e.target;
	});

	indexcolumnul.addEventListener("dragover", (e) => {
		e.preventDefault();
		const targetItem = e.target;
		if (targetItem !== draggedItem && targetItem.nodeName === "LI") {
			targetItem.parentNode.insertBefore(draggedItem, targetItem);
		}
	});

	indexcolumnul.addEventListener("dragend", () => {
		draggedItem = null;
	});	

	_setToolbar(dialogContent, "Save", closeTableWindowWithSave, "tableDialog");
}

function changeTableEditorMode() {
	if (this.textContent==="table") {
		this.textContent="index";
		d3.select(".erd9Dialog-grid1").style("display", "");
		d3.select(".erd9Dialog-grid2").style("display", "none");
		return;
	}
	this.textContent="table";
	d3.select(".erd9Dialog-grid1").style("display", "none");
	d3.select(".erd9Dialog-grid2").style("display", "");

	// 기존 작업 초기화
	document.getElementById("indexeName").value="";
	d3.select(".tableIndexGrid-tbody").selectAll("tr.selectRow").each(function() {
		this.classList.remove("selectRow");	
	});	
    d3.select(".indexcolumnul").selectAll("li").remove();
	
	let indexbody = d3.select(".tableIndexGrid-tbody");
	indexbody.selectAll("tr").remove();

	// 색인용 필드 추가
	d3.select(".tablegrid-tbody").selectAll("tr")
      .each(function (d, i)  {
        var cells = d3.select(this).selectAll("td").nodes();
        let column = cells[0].innerText.trim();
        if (column==="") return;
		let row = indexbody.append("tr");
		row.append("td").text(column);
		row.append("td").text(cells[1].innerText.trim());
      });
    
}
function handleIndexCellClick(event){
    const cell = event.target;
    if (cell.nodeName !== "TD") return;
    
    let row = cell.parentNode;
	var rowText = d3.select(row).select("td").text();

	if (row.classList.contains("selectRow")) {
    	row.classList.remove("selectRow");	
		d3.select(".indexcolumnul #col"+rowText).remove();
	} else {
		row.classList.add("selectRow");	
		d3.select(".indexcolumnul").append("li").attr("id", "col"+rowText).text(rowText).attr("draggable", "true");
	} 
}

function handleIndexAdd(){
	let indexNameEle = document.getElementById("indexeName");
	let indexName = indexNameEle.value.trim();
	if (indexName.length < 5) {
		alert("Enter an table index name of at least 5 characters");
		indexNameEle.focus();
		return;
	}
	// 색인 필드 추출
	let indexFld = "";
	d3.select(".erd9Dialog-content").select(".indexcolumnul").selectAll("li").each(function() {
		var rowText = this.innerText;
		if (indexFld) indexFld += ",";
		indexFld += rowText;
	});

	if (!indexFld) {
		alert("Select the columns to use for the table index.");
		return;
	}

	let data = {name: indexName, fields:indexFld};
	let inx = d3.select(".tableindexList").select("#inx" + indexName);
	if (!inx.empty()) {
		inx.data([data])
		   .html(`<span class="delete-icon">x </span> ${data.name} (${data.fields})`);
		return;
	}

	d3.select(".tableindexList").append("li")
	  .attr("id", "inx"+data.name)
	  .data([data])
	  .html(`<span class="delete-icon">x </span> ${data.name} (${data.fields})`)
	  .on("click", handleIndexSelect);
}


function handleIndexSelect(event){
	if (event.target.nodeName === "SPAN") {
		if (! confirm("Do you want to delete the selected table index?") ) return;
		this.remove();
		return;
	} 
	
	document.getElementById("indexeName").value=this.id.substring(3, this.id.length);
	
	d3.select(".tableIndexGrid-tbody").selectAll("tr.selectRow").each(function() {
		this.classList.remove("selectRow");	
	});

	let data = d3.select(this).data()[0];
	let fields = data.fields.split(',');
	let indexcolumnul = d3.select(".indexcolumnul");
	indexcolumnul.selectAll("li").remove();

	fields.forEach((fld) => {
		indexcolumnul.append("li").attr("id", "col"+fld).text(fld).attr("draggable", "true");
		d3.select(".tableIndexGrid-tbody").selectAll("tr").each(function() {
			if (d3.select(this).select("td").text()===fld)
			this.classList.add("selectRow");	
		});
	});
}

// ------------------------------------------------------

function showImportFileDialog() {
	if (ccc17064457956221214("importFileDialog")) return;

	let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "Select the files you want to import.");

	dialogContent.append("input")
		.attr("type", "file")
		.attr("id", "fileInput");

	_setToolbar(dialogContent, "Open", closeFileWindowWithImport, "importFileDialog");
}

function showTextDialog() {
	editingDia = ccc17064457956187008;
	if (ccc17064457956221214("textDialog")) {
		d3.select("#erdComments").property("value", editingDia.getData() );		
		return;
	}

	let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "Enter any necessary notes or comments, such as table information or underlying code.");

	dialogContent.append("textarea")
		.attr("id", "erdComments")
		.attr("cols", "75")
		.attr("rows", "10")
		.property("value", editingDia.getData() );

	_setToolbar(dialogContent, "Save", closeTextWindowWithSave, "textDialog");

	dialogContent.node().focus();
}

function showSimpleImportDDL() {
	if (ccc17064457956221214("simpleImportDDLDialog")) return;

	let dialogContent = ccc17064457956239298.append("div").attr("class", "erd9Dialog-content-wide");

	//"Simple Import DDL"
	const tabTool = dialogContent.append("div");
	      tabTool.append("div").text("Simple Import DDL").style("display", "inline-block");
	const tabTool1 = tabTool.append("div").style("display", "inline-block").style("margin-left", "350px");
		const tabContainer = tabTool1.append("div").attr("class", "tab-container");
			tabContainer.append("div").attr("id", "tab1-tab").attr("class", "tab active").text("SQL").on("click", switchTab);
			tabContainer.append("div").attr("id", "tab2-tab").attr("class", "tab").text("Preview").on("click", switchTab);
			tabContainer.append("div").attr("id", "tab3-tab").attr("class", "tab").text("Log").on("click", switchTab);


	const tabContent1 = dialogContent.append("div").attr("id", "tab1").attr("class", "tab-content active");
		const tabContentToolbar1 = tabContent1.append("div").style("display", "inline-block");
			tabContentToolbar1.append("button").attr("id", "pasteButton4DDL").text("Paste").on("click", ev_pasteButton4DDL);
			tabContentToolbar1.append("button").attr("id", "previewButton4DDL").text("Preview").on("click", ev_previewButton4DDL);
			tabContentToolbar1.append("button").attr("id", "runButton4DDL").text("Run(Import DDL)").on("click", ev_runButton4ERD);
		const tabContentToolbar2 = tabContent1.append("div").style("display", "inline-block");
		tabContentToolbar2.html(" <input type='radio' name='ccc170644579561217504DDL' value='mariadb'  checked='checked'>MariaDB</input> <input type='radio' name='ccc170644579561217504DDL' value='oracle'>Oracle</input> <input type='radio' name='ccc170644579561217504DDL' value='mssql'>MS-SQL</input>");
		const sourceSQL = tabContent1.append("div").attr("id", "sourceSQL").attr("class", "tab-logger");
		sourceSQL.html("/*Copy the DDL statement you want to import, then press the 'Paste' button to paste it.*/ <br/>CREATE TABLE board(<br/>board_id INT NOT NULL,<br/>title VARCHAR(200) NOT NULL,<br/>writer VARCHAR(20) NOT NULL,<br/>regdate DATETIME NOT NULL,<br/>count INT DEFAULT 0,<br/>content LONGTEXT NOT NULL,<br/>CONSTRAINT PRIMARY KEY(board_id)<br/>);<br/><br/>CREATE TABLE board_comment(<br/>comment_id INT NOT NULL,<br/>board_id INT NOT NULL,<br/>writer VARCHAR(20) NOT NULL,<br/>regdate DATETIME NOT NULL,<br/>content LONGTEXT NOT NULL,<br/>CONSTRAINT PRIMARY KEY(comment_id)<br/>);<br/><br/>ALTER TABLE board_comment ADD CONSTRAINT board_comment_fk FOREIGN KEY(board_id)REFERENCES board(board_id);<br/>");
	
	const tabContent2 = dialogContent.append("div").attr("id", "tab2").attr("class", "tab-content");
		const tabContentToolbar2_1 = tabContent2.append("div").style("display", "inline-block");
		tabContentToolbar2_1.append("button").attr("id", "runButton4DDL").text("Run(Import from Preview result)").on("click", ev_runPreviewButton4ERD);

		tabContent2.append("div").attr("id", "previewDiv").attr("class", "tab-logger");
    
	const tabContent3 = dialogContent.append("div").attr("id", "tab3").attr("class", "tab-content");
	tabContent3.append("div").attr("id", "logDiv").attr("class", "tab-logger");


	_setToolbar(dialogContent, null, null, "simpleImportDDLDialog", removeWindow3SimpleImport);

	// fetch("/ddl_sample.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         sourceSQL.html(data);
    //     })
    //     .catch(error => console.error(error));
}

function removeWindow3SimpleImport(id) {
	if (sql2json)  sql2json.initResult();
	removeWindow(id);
}

function ev_pasteButton4DDL() {
	navigator.clipboard.readText()
	.then(text => {
		highlightSQL(text, document.getElementById("sourceSQL")) 
	})
	.catch(error => {
		console.error("Failed to paste from clipboard: ", error);
	});	
}

let sql2json = null;
function ev_previewButton4DDL() {
	switchTabByName("tab3");
	if (!sql2json)  sql2json = new Sql2Json();
	sql2json.extract(document.getElementById("sourceSQL").innerText, document.getElementById("logDiv"))
		.then(() => {
			sql2json.logInfo("---------------------------------------------") ;
			sql2json.logInfo("Import Entity: " + sql2json.tableList.length) ;
			sql2json.logInfo("Import Relationship: " + sql2json.relationList.length) ;
	  
			switchTabByName("tab2");
			generatePreview(document.getElementById("previewDiv"), sql2json.tableList, sql2json.relationList);
		});
}

function ev_runPreviewButton4ERD() {
	switchTabByName("tab3");

	setDBMS( document.querySelector('input[name="ccc170644579561217504DDL"]:checked').value );
	generateERD(document.getElementById("logDiv"), sql2json.tableList, sql2json.relationList);
}
function ev_runButton4ERD() {
	switchTabByName("tab3");

	setDBMS( document.querySelector('input[name="ccc170644579561217504DDL"]:checked').value );

	if (!sql2json)  sql2json = new Sql2Json();
	sql2json.extract(document.getElementById("sourceSQL").innerText, document.getElementById("logDiv"))
		.then(() => {
			sql2json.logInfo("---------------------------------------------") ;
			sql2json.logInfo("Import Entity: " + sql2json.tableList.length) ;
			sql2json.logInfo("Import Relationship: " + sql2json.relationList.length) ;
			sql2json.logInfo("---------------------------------------------") ;

			generateERD(document.getElementById("logDiv"), sql2json.tableList, sql2json.relationList);
		});
}

function switchTab() {
	let tabName = event.target.id;
	switchTabByName(tabName.substring(0, 4));
}

function switchTabByName(tabName) {
	var tabs = document.getElementsByClassName("tab");
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
	}
	document.getElementById(tabName + "-tab").classList.add("active");

	var tabContents = document.getElementsByClassName("tab-content");
	for (var i = 0; i < tabContents.length; i++) {
		tabContents[i].classList.remove("active");
	}
	document.getElementById(tabName).classList.add("active");
}

function showGenerateDDLDialog() {
	let editor;
	if (ccc17064457956221214("generateDDLDialog")) {
		editor = d3.select("#editorDDL");
	} else {
		let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "Data Definition Language (DDL)");

		editor = dialogContent.append("div").attr("id", "editorDDL").attr("class", "tab-logger");
		
		_setToolbar(dialogContent, "Copy code", copyCode, "generateDDLDialog", removeWindow);
	}
	editor.text("");
	let aa;
	switch (ccc17064457956121750) {
	  case "oracle": aa = new BBB17064457956094472(); break;
	  case "mssql":  aa = new BBB17064457956097247(); break;
	  default:  	 aa = new BBB17064457956091947(); 
	}					
	aa.makeSQL(editor.node(), bbb17064457956052290, bbb17064457956059005);	
}

function copyCode() {
	const content = document.getElementById('editorDDL');

	var textarea = document.createElement("textarea");
	textarea.value = content.innerText;
	
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	alert("The DDL has been copied to the clipboard.");
}

function showGenerateTableDescriptionDialog() {
	let editor;
	if (ccc17064457956221214("tableDescriptionDialog")) {
		editor = d3.select("#editorDDL");
	} else {
		let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "Table Description");

		editor = dialogContent.append("div").attr("id", "editorDDL").attr("class", "tab-logger");
		
		_setToolbar(dialogContent, "Copy Data", copyHTML, "tableDescriptionDialog", removeWindow);
	}

	editor.text("");
	generateTableDesc(editor.node(), bbb17064457956052290, bbb17064457956059005, ccc17064457956121750);
}

function copyHTML() {
	const content = document.getElementById('editorDDL');

	var textarea = document.createElement("textarea");
	textarea.value = content.innerHTML;
	
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	alert("The Table Description has been copied to the clipboard.");
}

function showDetectRelationshipDialog() {
	let editor;
	if (ccc17064457956221214("detectRelationshipDialog")) {
		editor = d3.select("#editorDMR");
	} else {
		let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "Auto Detect Missing Relationship");

		editor = dialogContent.append("div").attr("id", "editorDMR").attr("class", "tab-logger");
		
		_setToolbar(dialogContent, "Copy Data", copyHTML, "detectRelationshipDialog", removeWindow);
	}

	editor.text("");
	detectRelationshipDialog(editor.node(), bbb17064457956052290, bbb17064457956059005, ccc17064457956121750);
}

function removeWindow(id) {
	var node = document.getElementById(id);
	if (!node) return;
	node.parentNode.removeChild(node);
}

function closeWindow(id) {
	d3.select("#"+id).style("display", "none");
	windowStatus = BBB17064457956059299.BBB17064457956089410;
}	

function ccc17064457956221214(id) {
	windowStatus = BBB17064457956059299.POPUP;

	ccc17064457956239298 = d3.select("#"+id);
	if (!ccc17064457956239298.empty()) {
		ccc17064457956239298.style("display", "block");
		return true;
	}

	ccc17064457956239298 = d3.select("body").append("div")
		.attr("id", id)
		.attr("class", "erd9Dialog")
		.style("display", "block");

	return false;
}

function ccc17064457956221214Content(parent, text) {
	let dialogContent = parent.append("div")
		.attr("class", "erd9Dialog-content");

	if (text) dialogContent.append("p").html(text);

	return dialogContent;
}

function _setToolbar(parent, okText, okHandle, closeID, closeCallBack) {
	let toolbar = parent.append("div")
		.attr("class", "erd9Dialog-toolbar");

	if (okText)	
		toolbar.append("button").text(okText).on("click", okHandle);

	toolbar.append("button")
		.text("Close")
		.on("click", function() {
			closeWindow(closeID);
			if (closeCallBack) closeCallBack(closeID);
		});
}


function ccc17064457956195048() {
	let loadingScreen = d3.select("#loadingScreen");
	if (!loadingScreen.empty()) {
		loadingScreen.style("display", "block");
		return;
	}

	loadingScreen = d3.select("body").append("div")
		.attr("id", "loadingScreen")
		.attr("class", "loading-screen");

	loadingScreen.append("div")
		.attr("class", "loader");
}

function ccc17064457956195634() {
	d3.select("#loadingScreen").style("display", "none");
}

function showFileOpenDialog() {
	BBB17064457956103557 = null;
	if (ccc17064457956221214("fileOpenDialog")) return;

	let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "These files are stored in the current web browser using IndexedDB.<br/>Save locally on your PC, preferably using the expert feature.");

	var grid = dialogContent.append("div").attr("class", "erd9Dialog-grid");
	var table = grid.append("table");
	var thead = table.append("thead").append("tr");
	thead.append("th").style("width", "50px").text("No.");
	thead.append("th").style("width", "400px").text("File Name");
	thead.append("th").style("width", "150px").text("Entity / Relation");
	thead.append("th").style("width", "150px").text("Last Update");
	thead.append("th").style("width", "50px");

	table.append("tbody")
		.attr("id", "fileTableBody");

	_setToolbar(dialogContent, "Open", closeFileWindowWithOpen, "fileOpenDialog");
}

const samplelist =[
	{name:"Sakila", count: "16 / 20", dbms: "MySQL (MariaDB)", filename:"mysql_Sakila.json"},
	{name:"Employee", count: "6 / 6", dbms: "MySQL (MariaDB)", filename:"mysql_employee.json"},
	//{name:"Northwind", count: "8 / 7", dbms: "MS-SQL", filename:"mssql_Northwind.json"},
	{name:"BikeStores", count: "9 / 10", dbms: "MS-SQL", filename:"mssql_BikeStores.json"},
	{name:"Global fictitious company", count: "12 / 11", dbms: "ORACLE", filename:"oracle_OT.json"}
];

function showSamplesOpenDialog() {
	if (BBB17064457956103557)  BBB17064457956103557.style.backgroundColor = "";
	BBB17064457956103557 = null;
	if (ccc17064457956221214("sampleOpenDialog")) return;

	let dialogContent = ccc17064457956221214Content(ccc17064457956239298, "ERD9 is a specialized tool for database modeling.<br/>You can explore various features of ERD9 using the following example.<br/>All examples are created based on samples provided by each DBMS vendor. </p><p style='text-align: center; line-height: 0.6;'><a href='https://github.com/gujc71/erd9' target='_blank' style='color: #29cecf;'>View Documentation</a>");

	var grid = dialogContent.append("div").attr("class", "erd9Dialog-grid");
	var table = grid.append("table");
	var thead = table.append("thead").append("tr");
	thead.append("th").style("width", "50px").text("No.");
	thead.append("th").style("width", "400px").text("Sample Description");
	thead.append("th").style("width", "150px").text("Entity / Relation");
	thead.append("th").style("width", "150px").text("DBMS");

	const tbody = table.append("tbody").attr("id", "smapleTableBody");
		
	samplelist.forEach((item, inx) => {
		let row = tbody.append("tr");
		row.attr("id", inx);
		row.attr("filename", item.filename);
		row.append("td").text(inx+1);
		row.append("td").text(item.name);
		row.append("td").text(item.count);
		row.append("td").text(item.dbms);
		row.on('click', function() {
			if (BBB17064457956103557)  BBB17064457956103557.style.backgroundColor = "";
			BBB17064457956103557 = this;
			BBB17064457956103557.style.backgroundColor = "yellow";					
		});			
	});

	//_setToolbar(dialogContent, "Open", closeSampleWindowWithOpen, "sampleOpenDialog");

	let toolbar = dialogContent.append("div") .attr("class", "erd9Dialog_toolbar1");
	let toolbar_left = toolbar.append("div") .attr("class", "erd9Dialog_toolbar_left");
	const chk = toolbar_left.append("input").attr("type", "checkbox").attr("id", "checkbox1")
		.on("change", function() {
			localStorage.setItem("dontShow", this.checked);
		});
	toolbar_left.append("label").attr("for", "checkbox1").html("Don't Show");
	if (localStorage.getItem("dontShow")==="true") chk.attr("checked", "checked");

	let toolbar_right = toolbar.append("div") .attr("class", "erd9Dialog_toolbar_right");
	toolbar_right.append("button").text("Open").on("click", closeSampleWindowWithOpen);
	toolbar_right.append("button")
		.text("Close")
		.on("click", function() {
			closeWindow("sampleOpenDialog");
		});
}

function createaaa17064457956034678Menu() {
	ccc17064457956131213 = svg.append("text")  
			.attr("fill", "blue")
			.attr("font-weight", "bold")
			.attr("font-size", "13px")
			.attr("visibility", "hidden");	
			
	ccc17064457956131213.append("tspan")
			.attr("dy", 20)			
			.text("ⓧ")
			.on("mousedown", ev_deleteaaa17064457956034678);
	ccc17064457956131213.append("tspan")
			.attr("dy", 20)			
			.text("ⓔ")
			.on("mousedown", function(){
				event.preventDefault();
				if (ccc17064457956187008 instanceof AAA17064457956029536) openTableWindow() ;
				else
				if (ccc17064457956187008 instanceof AAA17064457956023974) showTextDialog() ;
			});
}

let ccc17064457956239053=null;
function copyaaa17064457956034678() {
	if (!ccc17064457956187008 || ccc17064457956187008 instanceof AAA17064457956022705) return;
	ccc17064457956239053 = ddd17064457956125209.ccc17064457956123580(ccc17064457956187008);
}

function pasteaaa17064457956034678() {
	if (!ccc17064457956239053) return;

	function removeFK(myFld) {
		myFld.isFK = false;
		delete myFld['parent'];
		delete myFld['parentID'];
	};

	ccc17064457956239053.x1 = ccc17064457956239053.x1 + 20;
	ccc17064457956239053.y1 = ccc17064457956239053.y1 + 20;
	if (ccc17064457956239053.data.physicalName) {
		ccc17064457956239053.data.physicalName = ddd17064457956125209.ddd17064457956136516(ccc17064457956239053.data.physicalName);
		let newDia = ddd17064457956125209.ccc17064457956123580(ccc17064457956239053);
		newDia.data.keys.forEach(myFld => removeFK(myFld));
		newDia.data.fields.forEach(myFld => removeFK(myFld));

		diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956071022, new AAA17064457956029536(svg, newDia.x1, newDia.y1, null, newDia.data) );
	}else diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956071022, new AAA17064457956023974(svg, ccc17064457956239053.x1, ccc17064457956239053.y1, null, ccc17064457956239053.data.slice()) );

}

var svgRate = 1;
function svgZoomin(rate) {
	// 최소 및 최대 확대/축소 제한 (옵션)
	svgRate = Math.min(Math.max(0.4, svgRate + 0.2 * rate), 3);

	// 확대/축소 변환 적용
	let sY = 0 - Math.trunc((5555 - 5555*svgRate) / 2);
	let sX = 68 - Math.trunc((5555 - 5555*svgRate) / 2);
	svg.attr("transform", `translate(${sY}, ${sX}) scale(${svgRate})`);
	//svgBorder.style("width", Math.trunc(1500*scale) +"px").style("height", Math.trunc(1500*scale) +"px");
};

let AAA17064457956291595 = null;
let diagramStack = null;

window.onload = function() {
	svg=d3.select("svg");

	AAA17064457956291595 = new AAA17064457956281292(svg);
	diagramStack = new aaa17064457956034678Stack();

	createaaa17064457956034678Menu();
		
	d3.select(document.body).on("keydown", function() {
		if (windowStatus !== BBB17064457956059299.BBB17064457956089410) return;
		  
		if (event.key === "+") svgZoomin(1);
		else
		if (event.key === "-") svgZoomin(-1);
		else
		if (event.key === "Delete" && ccc17064457956187008) ev_deleteaaa17064457956034678();
		else
		if (event.ctrlKey || event.metaKey){
		    event.preventDefault(); 
			switch (event.key.toLowerCase()) {
				case 's': saveFile(); break;
				case 'c': copyaaa17064457956034678(); break;
				case 'v': pasteaaa17064457956034678(); break;
				case 'z': diagramStack.ddd17064457956308863(); break;
				case 'y': diagramStack.aaa17064457956309705(); break;
				case 'f': document.getElementsByClassName("findEntityDiv")[0].classList.toggle('expanded');
						  document.getElementById("findKeyword").focus(); break;
			}
		}
	});
  
	svg.on("mousedown", function(){
		if (event.button === 2 || windowStatus !== BBB17064457956059299.BBB17064457956089410) return;
		
		  clickCount++; 
		  if (clickCount === 1) {
			  clickTimer = setTimeout(function() {clickCount = 0;}, 200); 
		  } else if (clickCount === 2) { // mouse double click
			  clearTimeout(clickTimer);
			  clickCount = 0; 
			  if (clickedaaa17064457956034678 instanceof AAA17064457956029536) openTableWindow() ;
			  else
			  if (clickedaaa17064457956034678 instanceof AAA17064457956023974) showTextDialog() ;
			  return;
		  }
		  
		  if (ccc17064457956134031===BBB17064457956055856.BBB17064457956108196) {
			  ccc17064457956134031 = BBB17064457956055856.BBB17064457956089410;
			  return;
		  }
		  ccc17064457956134031 = BBB17064457956055856.BBB17064457956089410;
		  
		  ccc17064457956187008 = clickedaaa17064457956034678;	
		  clickedaaa17064457956034678 = null;
  
		  // 선택된 개체가 선이면 
		  if (ccc17064457956187008 && ccc17064457956187008.ccc17064457956204100) {
			  AAA17064457956291595.deselectaaa17064457956034678(ccc17064457956187008, ccc17064457956131213);
			  return;
		  }
  
		  const [currentX, currentY] = d3.pointer(event);
		  ccc17064457956184493.x = currentX;
		  ccc17064457956184493.y = currentY;
  
		  // 선택된 개체가 없으면 
		  if (!ccc17064457956187008) {
			AAA17064457956291595.deselectaaa17064457956034678(ccc17064457956187008, ccc17064457956131213);
			if (makeaaa17064457956034678Type === BBB17064457956046431.BBB17064457956089410 && event.target===svg.node())   ccc17064457956134031 = BBB17064457956055856.SELECT;
			else			
			if (makeaaa17064457956034678Type === BBB17064457956046431.TEXT)   diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956071022, new AAA17064457956023974(svg, currentX, currentY)); 
			else			
			if (makeaaa17064457956034678Type === BBB17064457956046431.BBB17064457956085497) diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956071022, new AAA17064457956029536(svg, currentX, currentY));
			ccc1706445795618152 = null;
			return;
		  } 
		  // 선택된 개체가 선택 리스트에 있으면 - 테이블
		  if (AAA17064457956291595.AAA17064457956291121(ccc17064457956187008)) { 
			ccc17064457956134031 = BBB17064457956055856.ccc1706445795608607;
			return;
		  }
		  // 선택 리스트 해제, 선택 개체 추가
		  AAA17064457956291595.deselectaaa17064457956034678(ccc17064457956187008, ccc17064457956131213);
	  
		  if (makeaaa17064457956034678Type === BBB17064457956046431.BBB17064457956095072 || makeaaa17064457956034678Type === BBB17064457956046431.BBB1706445795609969 ) {
			  ccc17064457956134031 = BBB17064457956055856.BBB17064457956085497_RELATION;
			  if (ccc1706445795618152 === null) ccc1706445795618152 = ccc17064457956187008;
		  } else {
			  ccc17064457956134031 = BBB17064457956055856.ccc1706445795608607;
		  }
		})
		.on("mousemove", function(){
		  if (ccc17064457956134031 === BBB17064457956055856.BBB17064457956089410) return;

		  const [currentX, currentY] = d3.pointer(event);
		  
		  if ( ccc17064457956134031 === BBB17064457956055856.SELECT) {
			AAA17064457956291595.setPosition(ccc17064457956184493.x, ccc17064457956184493.y, currentX, currentY);
			return;
		  }

		  if (ccc17064457956134031 === BBB17064457956055856.ccc1706445795608607) {
			if (currentX === ccc17064457956184493.x && currentY === ccc17064457956184493.y) return; 		// 마우스 위치 변환가 없으면 다음 작업 하지 않음
			diagramStack.CCC17064457956306203(BBB17064457956073451.ccc1706445795608607, AAA17064457956291595.getSelectaaa17064457956034678State());
		  }
		  ccc17064457956134031 = BBB17064457956055856.BBB17064457956085497_MOVING;

		  AAA17064457956291595.setEntityPosition(currentX - ccc17064457956184493.x, ccc17064457956213394 = currentY - ccc17064457956184493.y);

		  ccc17064457956184493.x = currentX;
		  ccc17064457956184493.y = currentY;	
		})	
		.on("mouseup", function(){
		  if (ccc17064457956134031 === BBB17064457956055856.BBB17064457956089410) return;

		  if ( ccc17064457956134031 === BBB17064457956055856.SELECT) {
			const [currentX, currentY] = d3.pointer(event);

			AAA17064457956291595.selectaaa17064457956034678(ccc17064457956184493.x, ccc17064457956184493.y, currentX, currentY);
		  }	else
		  if ( BBB17064457956055856.BBB17064457956085497_RELATION && ccc1706445795618152 != null && ccc1706445795618152 != ccc17064457956187008) {
			  let r = new AAA17064457956022705(svg, ccc1706445795618152, ccc17064457956187008, true, makeaaa17064457956034678Type) ;
			  if (r.id) {
				  bbb17064457956059005.set(r.id, r );
				  diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956083421, r);
				}
			  ccc1706445795618152 = null;
			  ccc17064457956187008.deselectaaa17064457956034678(ccc17064457956131213);
			} else
		  if ( ccc17064457956134031 === BBB17064457956055856.BBB17064457956085497_MOVING && ccc17064457956187008 instanceof AAA17064457956029536) {
			ccc17064457956187008.ccc17064457956214368();
		  }
  
		  ccc17064457956134031 = BBB17064457956055856.BBB17064457956089410;
		});	
			  
	d3.select("#newDocument").on("click", function(){
		newDocument()
	});
	
	d3.select("#saveFile").on("click", saveFile);
	d3.select("#exportFile").on("click", function(){
		const jsonStr = JSON.stringify(ccc1706445795618146(), null, 2);
		const blob = new Blob([jsonStr], { type: "application/json" });
		const url = URL.createObjectURL(blob);

		const a = document.createElement("a");
		a.href = url;
		let filename = d3.select("#filename").text();
		if (!filename || filename==="no name") filename = "erd9_data.json";
		a.download = filename;
		a.textContent = "Download JSON";

		document.body.appendChild(a);

		// start download
		a.click();

		// release
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	})

	d3.select("#importFile").on("click", function(){
		showImportFileDialog();
	})
	d3.select("#dbms4mariadb").on("click", ev_selectDBMS);
	d3.select("#dbms4oracle").on("click", ev_selectDBMS);
	d3.select("#dbms4mssql").on("click", ev_selectDBMS);	
	d3.select("#simpleImportDDL").on("click", showSimpleImportDDL);
	d3.select("#generateDDL").on("click", showGenerateDDLDialog);
	d3.select("#tableDescription").on("click", showGenerateTableDescriptionDialog);	
	d3.select("#detectRelationship").on("click", showDetectRelationshipDialog);	
	
	d3.select("#openFile").on("click", function(){
		showFileOpenDialog();

		const manager = new BBB17064457956116094("erd9", 1);
		const today = new Date();
		manager.selectAll((results) => {
			if (!results) return;
			const tbody = d3.select("#fileTableBody");
			tbody.selectAll("tr").remove();
			
			results.forEach((item, inx) => {
				let row ;
				if (tbody.select(":first-child").node())
				     row = tbody.insert("tr", ":first-child");		  
				else row = tbody.append("tr");
				row.attr("id", item.fileId);
				row.append("td").text(inx+1);
				row.append("td").text(item.fileName);
				row.append("td").text(`${item.entityCount} / ${item.relationCount}`);
				row.append("td").text(_getDate(today, item.updateDate));
				row.append("td").append("a").text("X").attr("title", "delete File")
					.on("click", function() {
						if (! confirm("Do you really want to delete this file?") ) return;
						manager.removeFile(item.fileId);
						row.remove();
					});
				row.on('click', function() {
					if (BBB17064457956103557)  BBB17064457956103557.style.backgroundColor = "";
					BBB17064457956103557 = this;
        			BBB17064457956103557.style.backgroundColor = "yellow";					
				});	
			});
		});		
	})	
	
	d3.select("#openSamples").on("click", function(){
		showSamplesOpenDialog();
	})	

	d3.select("#arrowBtn").on("mousedown", function(){
		setMakeaaa17064457956034678Type(BBB17064457956046431.BBB17064457956089410, this)
	})
	d3.select("#entityBtn").on("mousedown", function(){
		setMakeaaa17064457956034678Type(BBB17064457956046431.BBB17064457956085497, this)
	})
	d3.select("#relationPKBtn").on("mousedown", function(){
		setMakeaaa17064457956034678Type(BBB17064457956046431.BBB17064457956095072, this)
	})
	d3.select("#relationAKBtn").on("mousedown", function(){
		setMakeaaa17064457956034678Type(BBB17064457956046431.BBB1706445795609969, this)
	})	
	d3.select("#textBtn").on("mousedown", function(){
		setMakeaaa17064457956034678Type(BBB17064457956046431.TEXT, this)
	})	  
	
	d3.select("#logicalBtn").on("mousedown", function(){
		setViewMode(BBB17064457956042117.LOGICAL, this);
	})	
	d3.select("#physicalBtn").on("mousedown", function(){
		setViewMode(BBB17064457956042117.PHYSICAL, this);
	})		
	if (typeof setTestData === "function") {
		setTestData();
	}

	d3.select("#findKeyword").on("focus", function(){
		this.parentNode.classList.add('expanded');
	}).on("keyup", function(){
		if (event.keyCode === 13) findaaa17064457956034678.nextaaa17064457956034678(this.value);
	})	
	d3.select("#closeFind").on("click", function(){
		this.parentNode.classList.remove('expanded');
	})	
	d3.select("#findNext").on("click", function(){
		findaaa17064457956034678.nextaaa17064457956034678(d3.select("#findKeyword").property("value"));
	})		
	d3.select("#findPrevious").on("click", function(){
		findaaa17064457956034678.previousaaa17064457956034678(d3.select("#findKeyword").property("value"));
	})		

	if (localStorage.getItem("dontShow")!=="true") showSamplesOpenDialog() ;
} // onload

	let tableGrid9 = null;

    function closeTableWindowWithSave() {
		let tableInfo = tableGrid9.BBB17064457956117493();
		tableInfo.physicalName = d3.select("#tableName").property("value");
		tableInfo.logicalName = d3.select("#tableComments").property("value");
		
		const backupData = ddd17064457956125209.ccc17064457956123580(editingDia.data); // 수정전 데이터. redo를 위한것.

		const result = editingDia.ccc17064457956212577(tableInfo);

		 if (result === "error") return;
		 if (result === "ok") diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956087683, editingDia, backupData); 

		closeWindow("tableDialog");
    }

	function closeTextWindowWithSave() {
		let txt = d3.select("#erdComments").property("value");
		
		const backupData = editingDia.getData(); // 수정전 데이터. redo를 위한것.
		editingDia.ccc17064457956219315(txt);
		diagramStack.CCC17064457956306203(BBB17064457956073451.ccc17064457956087683, editingDia, backupData); 

		closeWindow("textDialog");
    }

	let editingDia = null;
	function openTableWindow() {
		editingDia = ccc17064457956187008;
		showTableDialog();

		if (!tableGrid9) tableGrid9 = new BBB17064457956106099(d3.select(".tablegrid-tbody"), null, ccc17064457956121750);
	  	tableGrid9.ccc17064457956212577(ccc17064457956187008.data, ccc17064457956121750);

		d3.select("#tableName").property("value", ccc17064457956187008.data.physicalName);
		d3.select("#tableComments").property("value", ccc17064457956187008.data.logicalName);
    }

	let ccc17064457956209447;

	let ccc17064457956208528 = BBB17064457956042117.PHYSICAL;
	let makeaaa17064457956034678Type = BBB17064457956046431.BBB17064457956089410;
	let ccc17064457956121750 = BBB17064457956055028.MARIADB;
	let windowStatus = BBB17064457956059299.BBB17064457956089410;
	let ccc1706445795618152;
	let ccc17064457956187008;
	let clickedaaa17064457956034678;
	let ccc17064457956184493 = {};
	let svg;

	function ev_deleteaaa17064457956034678(){
		const result = confirm("Are you sure you want to remove?");
		if (!result) {
			return;
		}

		AAA17064457956291595.deselectaaa17064457956034678(null, null);
		ccc17064457956134031=BBB17064457956055856.BBB17064457956108196;
		
		diagramStack.CCC17064457956306203(ccc17064457956187008 instanceof AAA17064457956022705 ? BBB17064457956073451.ccc17064457956084541 : BBB17064457956073451.ccc17064457956078498, ccc17064457956187008); 
		ccc17064457956187008.removeaaa17064457956034678();
	}

	let ccc17064457956134031=BBB17064457956055856.BBB17064457956089410;
	
	window.addEventListener("beforeunload", function(event) {
	  if (!diagramStack.bbb17064457956225485) return;
      event.preventDefault(); 
      event.returnValue = ""; 
      return "Your work has not been saved.\n Are you sure you want to leave this page?";
    });

	var clickCount = 0; // 클릭 횟수를 추적하는 변수
    var clickTimer; // 클릭 딜레이를 위한 타이머 변수

	function _getDate(today, updateDate) {
		let date = new Date(updateDate);
		if (today.toLocaleDateString() === date.toLocaleDateString() ) 
			 return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		return date.toLocaleDateString();
	}

	function saveFile(){
		let userInput;
		if (!ccc17064457956209447) {
			userInput = prompt("Store the ERD data you created in the current web browser (IndexedDB).\nPlease enter new file name:");
			if (!userInput) return; 
			ccc17064457956209447 = Date.now();
			d3.select("#filename").text(userInput);
		}

		ccc17064457956195048();

		const fileData = ccc1706445795618146();
		const manager = new BBB17064457956116094("erd9", 1);

		manager.save({ fileId: ccc17064457956209447, fileName: userInput, data: fileData, entityCount: bbb17064457956052290.size, relationCount: bbb17064457956059005.size });	
		diagramStack.bbb17064457956225485 = false;

		ccc17064457956195634();
	}

	function ccc1706445795618146(){
		const ccc17064457956189285 = {};
		const relationData = [];
		const textData = [];

		bbb17064457956052290.forEach((item, inx) => {
			let entity = {};
			entity.x1 = item.x1;
			entity.y1 = item.y1;
			entity.x2 = item.x2;
			entity.y2 = item.y2;
			entity.data = {};
			entity.data.logicalName = item.data.logicalName;
			entity.data.physicalName = item.data.physicalName;
			entity.data.keys = item.data.keys;
			entity.data.fields = item.data.fields;
			entity.data.indexes = item.data.indexes;
			ccc17064457956189285[item.id] = entity;
		});
		bbb17064457956059005.forEach((item, inx) => {
			let entity = {};
			entity.id = item.id;
			entity.parent = item.ccc17064457956129725.id;
			entity.child = item.ccc17064457956121730.id;
			entity.relationType = item.relationType;
		 	relationData.push(entity);
		});
		bbb17064457956065496.forEach((item, inx) => {
			let entity = {};
			entity.x1 = item.x1;
			entity.y1 = item.y1;
			entity.data = item.data;
			textData.push(entity);
		});
		const fileData = {};
		fileData.dbms = ccc17064457956121750;
		fileData.entityData = ccc17064457956189285;
		fileData.relationData = relationData;
		fileData.textData = textData;

		return fileData;
	}

	function closeFileWindowWithOpen() {
		if (!BBB17064457956103557) {alert("Select the file to open"); return}

		closeWindow("fileOpenDialog");

		const manager = new BBB17064457956116094("erd9", 1);
		manager.open()
			.then(() => {
				return manager.get(parseInt(BBB17064457956103557.id));
			})
			.then((result) => {
				if (!result) return;
				ccc17064457956195048();
				manager.close();
				//console.info (result.data);
				ccc17064457956189001(result.data);
				ccc17064457956209447 = result.fileId;

				d3.select("#filename").text(result.fileName);
				ccc17064457956195634();
			})
			.catch((error) => {
				alert(error);
				manager.close();
			});	
    }

	function closeSampleWindowWithOpen() {
		if (!BBB17064457956103557) {alert("Select the sample to open"); return}

		closeWindow("sampleOpenDialog");

		const filename = BBB17064457956103557.getAttribute("filename");
		BBB17064457956103557.style.backgroundColor = "";

		fetch('https://gujc71.github.io/erd9/samples/' + filename)
		.then(response => {
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
		  return response.text();
		})
		.then(data => {
			ccc17064457956195048();
			ccc17064457956189001( JSON.parse(data) );
			ccc17064457956195634();		  
		})
		.catch(error => {
		  console.error('Fetch error:', error);
		});
    }

	function newDocument() {
		if (diagramStack.bbb17064457956225485) {
			if (! confirm("Your work hasn't been saved, do you want to continue?") ) return false;
		}
		ccc17064457956209447 = null;
		d3.select("#filename").text("no name");
		svg.selectAll("*").remove();
		bbb17064457956052290.clear();
		bbb17064457956059005.clear();
		bbb17064457956065496.clear();
		createaaa17064457956034678Menu();
		AAA17064457956291595.initialize(svg);
		diagramStack.ccc17064457956299925();

		return true;
	}

	function ccc17064457956189001(data) {
		if (!newDocument() ) return;
		setDBMS(data.dbms);

		for (const key in data.entityData) {
			let item = data.entityData[key];
			new AAA17064457956029536(svg, item.x1, item.y1, key, item.data);
		}
		for (const key in data.relationData) {
			let item = data.relationData[key];
			let parent = bbb17064457956052290.get(item.parent);
			let child = bbb17064457956052290.get(item.child);
			let r = new AAA17064457956022705(svg, parent, child, false, item.relationType, item.id) ;
			bbb17064457956059005.set(r.id, r );
		}
		for (const key in data.textData) {
			let item = data.textData[key];
			new AAA17064457956023974(svg, item.x1, item.y1, null, item.data);
		}
    }

	function setDBMS(dbms) {
		ccc17064457956121750 = dbms;
		d3.select("#dbmsDropbtn").text(d3.select("#dbms4"+ccc17064457956121750).text());
	}

	function closeFileWindowWithImport() {
		closeWindow("importFileDialog");

		const fileInput = document.getElementById("fileInput");
		if (fileInput.files.length===0) {
			alert("No file selected.");
			return;
		}		
		const selectedFile = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
          const content = event.target.result;
		  ccc17064457956189001(JSON.parse(content));
        };
        reader.readAsText(selectedFile);
    }

	function ev_selectDBMS() {
		let dbmsNew = event.target.id.replace("dbms4", "");
		if (dbmsNew===ccc17064457956121750) return;

		let ccc17064457956197547 = dataTypeUtil.dataTypeMatch[ccc17064457956121750+"2"+dbmsNew];
		if (!ccc17064457956197547) {
			alert("");
			return;
		}
		ccc17064457956195048();

		// 정확성을 위해 반대로 구성한 것을 추출하여 먼저 사용. a->b로 바꾸었다가 다시 b->a로 온 경우 더 정확해짐.
		let ccc17064457956192116 = {};
		let oldMatchs = dataTypeUtil.dataTypeMatch[dbmsNew +"2" + ccc17064457956121750];
		for (var key in oldMatchs) {
			const value = oldMatchs[key];
			ccc17064457956192116[value]=key;
		}		
		bbb17064457956052290.forEach(function(entity) {
			entity.ccc17064457956222074(ccc17064457956197547, ccc17064457956192116);
		});	

		ccc17064457956121750 = dbmsNew;
		d3.select("#dbmsDropbtn").text(event.target.innerText);

		ccc17064457956195634();
	}
	function setMakeaaa17064457956034678Type(at, btn){
		makeaaa17064457956034678Type = at;
		d3.selectAll(".toggle-diagram").classed('active', false);
		btn.classList.toggle("active");
		ccc1706445795618152 = null;
	}
	function setViewMode(vm, btn){
		ccc17064457956195048();

		ccc17064457956208528 = vm;
		d3.selectAll(".toggle-view-mode").classed('active', false);
		btn.classList.toggle("active");
		
		bbb17064457956052290.forEach(function(entity) {
			entity.ccc17064457956229661();
		});	
		bbb17064457956059005.forEach(function(entity) {
			entity.ccc17064457956151322();
		});			
		ccc17064457956195634();
	}

	
class BBB17064457956097663 {
  async makeSQL(editor, tableList, relationList) {
	await sleep(100);
	for (const value of bbb17064457956052290.values()) {
		await sleep(20);
		let tableSQL = this.ccc17064457956257687(value.data)

		ddd17064457956125209.ccc17064457956231391(editor, "pre", "log-span", tableSQL);
		editor.scrollTop = editor.scrollHeight;		
	}
	
	if (!relationList) return;
	
  	relationList.forEach((relationData) => {
		let relaName = relationData.name ? relationData.name : relationData.id;
		let data = relationData.ccc17064457956285317();
		let alterSql = `ALTER TABLE ${data.ccc17064457956231309} ADD CONSTRAINT ${relaName} FOREIGN KEY ( ${data.ccc17064457956231416} ) REFERENCES ${data.ccc17064457956237958} ( ${data.ccc17064457956249841} );\n`;
		ddd17064457956125209.ccc17064457956231391(editor, "pre", "log-span", alterSql);
		editor.scrollTop = editor.scrollHeight;			
    });	
  }
  
  ccc17064457956257687(ccc17064457956273506) {
	if (!ccc17064457956273506 || !ccc17064457956273506.allFields) return;
	const pkList = [];
	const columnSQLs  = [];
	const commentSQLs = [];
	ccc17064457956273506.allFields.forEach((columnData) => {
		let columnStr = `    ${columnData.column}    ${columnData.dataType}`;
		if (columnData.notNull) 	 columnStr += "    NOT NULL";
		if (columnData.ai) 			 columnStr += this.makeColumnAI();
		if (columnData.defaultValue) columnStr += this.ccc17064457956257768(columnData.defaultValue);
		if (columnData.uniqueKey) 	 columnStr += " UNIQUE";

		if (columnData.comment) {
			commentSQLs.push(this.ccc17064457956254451(ccc17064457956273506.physicalName, columnData));  // Oracle, MS-SQL 
			columnStr     += this.ccc17064457956254674(columnData.comment);		// MariaDB
		}
	    if (columnData.isPK) pkList.push(columnData.column);
		
		columnSQLs.push(columnStr);
	});

	if (pkList.length>0)  columnSQLs.push(this.ccc170644579562543574PK(ccc17064457956273506.physicalName, pkList.join(",")));

	let tableSQL = this.ccc17064457956242226(ccc17064457956273506.physicalName);
	tableSQL += columnSQLs.join(",\n");
	tableSQL += "\n) " + this.ccc1706445795624508(ccc17064457956273506.logicalName) + ";\n";	  		// MariaDB
	if (ccc17064457956273506.logicalName && ccc17064457956273506.logicalName!==ccc17064457956273506.physicalName) {
		tableSQL += this.ccc17064457956242255(ccc17064457956273506);									// Oracle, MS-SQL 
	} 
	tableSQL += commentSQLs.join("");
	tableSQL += this.ccc17064457956254357(ccc17064457956273506.physicalName, ccc17064457956273506.indexes);
	
	return tableSQL;
  }
  
  ccc17064457956242226(tableName) {
	  return `CREATE TABLE ${tableName} (\n`;
  }
  
  // DBMS 별로 필요한 함수를 orerride해서 사용
  ccc17064457956242255(ccc17064457956273506) {return "";}   				// 테이블 생성과 관계없이 독릭적으로 주석 생성 - Oracle, MS-SQL 
  ccc1706445795624508(comment) {return "";}  				// 테이블 생성시 주석을 추가 - MariaDB
  ccc17064457956257768(columnDefault) {return "";}
  ccc17064457956254451(tableName, columnData) {return "";}     // 필드 생성과 관계없이 독릭적으로 주석 생성 - Oracle, MS-SQL 
  ccc17064457956254674(comment) {return "";}   		// 필드 생성시 주석을 추가 - MariaDB
  
  ccc170644579562543574PK(tableName, fields) {
	  return `    CONSTRAINT  PK_${tableName}  PRIMARY KEY (${fields})`;
  }
  
  ccc17064457956254357(tableName, indexesData) {
	if (!indexesData) return "";
	
	let indexSQL = "";
	indexesData.forEach((index) => {
		indexSQL += `CREATE INDEX ${index.name} ON ${tableName} (${index.fields});\n`;
	});
    return indexSQL;	
  }	  
  
}

class BBB17064457956094472 extends BBB17064457956097663{
  ccc17064457956242255(ccc17064457956273506) {
	  return `COMMENT ON TABLE ${ccc17064457956273506.physicalName} IS '${ccc17064457956273506.logicalName}';\n`;
  }
  makeColumnAI() {
	return " GENERATED BY DEFAULT AS IDBBB17064457956085497";
  }
  ccc17064457956257768(value) {
	  return "    DEFAULT " + value;
  }
  ccc17064457956254451(tableName, columnData) {
	  return `COMMENT ON COLUMN ${tableName}.${columnData.column} IS '${columnData.logicalName}';\n`;
  }  
}

class BBB17064457956097247 extends BBB17064457956097663{
  ccc17064457956242255(ccc17064457956273506) {
	  return `EXEC sp_addextendedproperty N'MS_Description', N'${ccc17064457956273506.logicalName}', N'schema', N'dbo', N'table', N'${ccc17064457956273506.physicalName}';\n`;
  }
  makeColumnAI() {
	return " IDBBB17064457956085497(1,1)";
  }
  ccc17064457956257768(value) {
	return (!isNaN(value) ? "    DEFAULT " : "    ") + value;
	//return (!isNaN(value) || value.indexOf("IDBBB17064457956085497")===-1 ? "    DEFAULT " : "    ") + value;
  }
  ccc17064457956254451(tableName, columnData) {
	  return `EXEC sp_addextendedproperty N'MS_Description', N'${columnData.comment}', N'schema', N'dbo', N'table', N'${tableName}', N'column', N'${columnData.column}';\n`;
  }  	
}

class BBB17064457956091947 extends BBB17064457956097663{
  ccc1706445795624508(comment) {
	  return comment ? ` COMMENT='${comment}' ` : "";
  }
  makeColumnAI() {
	return " AUTO_INCREMENT";
  }
  ccc17064457956257768(value) {
	//return (!isNaN(value) || value.indexOf("AUTO_INCREMENT")===-1 ? "    DEFAULT " : "    ") + value;
	return (!isNaN(value)  ? "    DEFAULT " : "    ") + value;
  }
  ccc17064457956254674(comment) {
	  return `    COMMENT '${comment}'`;
  }  	
}
/*
 콤마와 콜론으로 처리하니 사용여부 잘 확인.
 주석(--. \/*  *\/) 제거
*/
async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms)); 
}

class Sql2Json {
    logInfo(msg) {
		ddd17064457956125209.ccc17064457956231391(this.logEditor, "span", "log-span", msg);
		this.logEditor.scrollTop = this.logEditor.scrollHeight;
	}
	logError(msg) {
		ddd17064457956125209.ccc17064457956231391(this.logEditor, "span", "log-span log-error", msg);
		this.logEditor.scrollTop = this.logEditor.scrollHeight;
	}
	async extract(sql, logEditor) {
	  logEditor.innerHTML = ""; 	
	  this.logEditor = logEditor;
	  this.initResult();
	  
	  sql = sql.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm,""); // 주석 제거
	  const ccc17064457956283674 = sql.split(";");
	  for (const inx in ccc17064457956283674) {
		await sleep(10);		
		let sqlLine = ccc17064457956283674[inx].trim().toUpperCase();
		if (!sqlLine) return;
		// 테이블 전처리
		//sqlLine = sqlLine.replace(/--(.)*[\n,\r]*/g,""); // 주석 제거
		sqlLine = sqlLine.replace(/\s{2,}/g, " "); // 여러개의 공백을 하나로
		sqlLine = sqlLine.replace(/`|"/g, ""); 		// 불필요 문자 제거
		sqlLine = sqlLine.replace(/DBO\./g, '');  	//ms-sql dbo. 제거

		if (sqlLine.startsWith("CREATE TABLE")) {
			this.ccc17064457956256169(sqlLine);
		} else
		if (sqlLine.startsWith("CREATE INDEX")) {
			this.ccc17064457956265548 (sqlLine);
		} else
		if (sqlLine.startsWith("ALTER TABLE")) {
			this.ccc17064457956263305 (sqlLine);
		} else
		if (sqlLine.startsWith("EXEC SP_ADDEXTENDEDPROPERTY")) {
			this.ccc17064457956263207 (sqlLine);
		} else
		if (sqlLine.startsWith("COMMENT ON")) {
			this.ccc17064457956267058 (sqlLine);
		}
	  }

	  await sleep(100);
	}
	initResult() {
	  this.tableMap = null;
	  this.tableList = null;
      this.relationList = null;	  
	  this.tableMap = {};
	  this.tableList = [];
      this.relationList = [];	  
	}
	ccc17064457956256169(ccc17064457956262880){
      const ccc17064457956273506 = {
        tableName: null,
        columns: [],
      };

      const tableMatch = ccc17064457956262880.match(/CREATE TABLE\s+(IF NOT EXISTS\s)*([^\s(]+)/i);
      if (!tableMatch) {
		return;
      }
      ccc17064457956273506.physicalName = tableMatch[tableMatch.length-1];
	  
	  // 컬럼 정보 추출
	  const startIndex = ccc17064457956262880.indexOf("(");
	  const endIndex   = this._getLastBracketPosition(ccc17064457956262880);
	  if (startIndex === -1 || endIndex===-1) {
		if (ccc17064457956262880.length>100) ccc17064457956262880 = ccc17064457956262880.substr(100);  
		this.logError("Invalid table information. : " + ccc17064457956262880.replace(/\n/g, ""));
		return; 
	  }
	  let tableInfoStr = ccc17064457956262880.substring(endIndex+1); // mariadb용 코멘트 
	  let match = tableInfoStr.match(/COMMENT\s*=\s*'([^']+)'/);
	  ccc17064457956273506.logicalName = match ? match[1] : ccc17064457956273506.physicalName;
	  
	  // 작업할 테이블 본문 내용
	  ccc17064457956262880 = ccc17064457956262880.substring(startIndex + 1, endIndex);

	  // 테이블 전처리 - 괄호 안의 콤마를 "@@@"로 변환. 콤마로 필드 구분하기 위해. 처리후 원복. number(10,2)  
	  ccc17064457956262880 = ccc17064457956262880.replace(/\(([^)]+)\)/g, (match) => {
		 return match.replace(/,/g, "@@@");  
	  });
	  
      const ccc17064457956278250 = ccc17064457956262880.split(",");
      ccc17064457956278250.forEach((statementColumn) => {
		  if (!statementColumn) return;
	      // 원본
		  statementColumn = statementColumn.replaceAll("@@@", ",");
		  
		  // 컬럼 전처리: 괄호안에 숫자,콤마,공백이 있으면 데이터 타입의 자릿수이므로 공백 제거.  varchar ( 10 ) => varchar(10)
		//   statementColumn = statementColumn.replace(/[\s]*\(([\d@,\s]*)\)/g, (match) => {
		//                                // /\(([^)]+)\)/g 
		// 	return match.replace(/\s/g, ""); 
		//   });
		  statementColumn = statementColumn.replace(/\((.*?)\)/g, (match, group) => {
			return match.replace(/\s/g, ''); 
		  });


		  // 공백으로 분할
          const colParts = statementColumn.trim().split(/\s+/);
		  if (colParts.length <2) {
			this.logError("Invalid comumn information. : " + statementColumn);
			return;
		  }
		  if (colParts[0]==="CONSTRAINT") {
			const match = statementColumn.match(/PRIMARY KEY[^)]*\(([^)]+)\)/);
			if (match) this._setPK(ccc17064457956273506, match[1].split(","))

			this._setRelation(ccc17064457956273506.physicalName, statementColumn);
			return;
		  }
		  if (colParts[0]==="PRIMARY") { // MariaDB
			// 괄호 내용 추출
			const match = statementColumn.match(/\(((?:[^()]+|\([^()]*\))*)\)/) ;	
			if (match) this._setPK(ccc17064457956273506, match[1].split(","))
		    return;
		  }
		  if (colParts[0]==="UNIQUE") { // MariaDB 차후 개선. 
		    return;
		  }
		  if (colParts[0]==="INDEX" || colParts[0]==="KEY") {  // MariaDB
			this._setIndex(ccc17064457956273506, colParts[1], statementColumn);
		    return;
		  }
		  if (colParts[0]==="FULLTEXT" ) {  // MariaDB - FULLTEXT KEY
			this._setIndex(ccc17064457956273506, colParts[2], statementColumn);
		    return;
		  }
		  if (colParts[0]==="FOREIGN") {  // MariaDB, ms-sql
			this._setRelation(ccc17064457956273506.physicalName, "CONSTRAINT INX_" + ddd17064457956125209.ddd17064457956134821() + statementColumn);
		    return;
		  }
		  
          const colData = {};
          colData.id     = "f" + ddd17064457956125209.ddd17064457956134821();
          colData.isPK   = statementColumn.includes("PRIMARY KEY");
          colData.notNull = statementColumn.includes("NOT NULL");
          colData.column = colParts[0];
          colData.dataType   = colParts[1];
		  if (colParts[2] && colParts[2].startsWith("(")) colData.dataType += colParts[2]; // ex: varchar   (10)

		  const match1 = statementColumn.match(/DEFAULT (\S+)/);
		  if (match1) {
			if (match1[1] !== "AS") 
				colData.defaultValue = match1[1];
			else 
			if (statementColumn.includes("IDBBB17064457956085497") ) colData.ai = true; // oracle: region_id NUMBER GENERATED BY DEFAULT AS IDBBB17064457956085497
			
		  }
          ccc17064457956273506.columns.push(colData);
		  
		  if (colParts.indexOf("COMMENT")>-1) {  // MariaDB Comment
			let match = statementColumn.match(/COMMENT\s+'([^']+)'/);
			if (match) colData.comment = match[1];				
		  }
		  if (colParts.indexOf("AUTO_INCREMENT")>-1) {  // MariaDB default
			colData.ai = true;
		  }
		  if (colParts.indexOf("UNIQUE")>-1) {  
			colData.uniqueKey = true;
		  }
		  
		  const match4mssql = statementColumn.match(/IDBBB17064457956085497[\s]*\(([^)]+)\)/);  // mssql
		  if (match4mssql)  colData.ai = true;  // colData.defaultValue = match4mssql[0];


      });
	  this.tableList.push(ccc17064457956273506);
	  this.tableMap[ccc17064457956273506.physicalName] = ccc17064457956273506;
	  this.logInfo(`imported : ${ccc17064457956273506.physicalName} (${ccc17064457956273506.columns.length} columns)`);
    }
	
	ccc17064457956263207(sqlLine) {
		// 홑따옴표 사이의 문자열 추출
		const commentData = sqlLine.match(/'(.*?)'/g); //  /'([^']+)'/g;
		if (!commentData) return;
		
		let chk = false;
		if (commentData.length===6) { // table comment
			let tableName = commentData[5].replace(/'/g, "");
			const ccc17064457956273506 = this.tableMap[tableName];
			if (ccc17064457956273506) {
				ccc17064457956273506.logicalName = commentData[1].replace(/'/g, "");
				this.logInfo(`imported comment: ${tableName} ${ccc17064457956273506.logicalName}`);
				chk = true;
			}
		} else
		if (commentData.length===8) { // column comment
			let tableName  = commentData[5].replace(/'/g, "");
			let column = commentData[7].replace(/'/g, "");
			let comment    = commentData[1].replace(/'/g, "");
			if (this._setColumnComment(this.tableMap[tableName], column, comment) ){
				this.logInfo(`imported comment: ${tableName}.${column} ${comment}`);
				chk = true;			
			}

		}
		if (!chk) this.logError("Invalid comment information. - " + sqlLine);
		
	}
	
	ccc17064457956267058(sqlLine) {
	    // 공백으로 분할
        const commentData = sqlLine.trim().split(/\s+/);	
		if (!commentData) return;
		
		let chk = false;
		if (commentData[2]==="TABLE") { // table comment
			const ccc17064457956273506 = this.tableMap[commentData[3]];
			if (ccc17064457956273506) {
				ccc17064457956273506.logicalName = commentData[5].replace(/'/g, "");
				this.logInfo(`imported comment: ${ccc17064457956273506.physicalName} ${ccc17064457956273506.logicalName}`);
				chk = true;
			} 
		} else
		if (commentData[2]==="COLUMN") { // column comment
			let columnData = commentData[3].split(".");
			let comment    = commentData[5].replace(/'/g, "");
			if (this._setColumnComment(this.tableMap[columnData[0]], columnData[1], comment)) {
				this.logInfo(`imported comment: ${columnData[0]}.${columnData[1]} ${comment}`);
				chk = true;	
			}
		}
		if (!chk) this.logError("Invalid comment information. - " + sqlLine);
	}
	
	_getLastBracketPosition (str) {
	  for (let i = str.length-1; i >0 ; i--) {
		if (str[i] === ")") return i;
	  }
	  return -1;
	}
	// _setPK(ccc17064457956273506, pkList){
	// 		  pkList.forEach((pk) => {
	// 			const flds = pk.trim().split(" ");
	// 			for (const i in ccc17064457956273506.columns) {
	// 				if (ccc17064457956273506.columns[i].column ===flds[0]) {
	// 					ccc17064457956273506.columns[i].isPK=true;
	// 					break;
	// 				}	
	// 			}
	// 		  });
	// }
	_setPK(ccc17064457956273506, pkList){
		pkList.forEach((pk) => {
		  const flds = pk.trim().split(" ");
		  for (const i in ccc17064457956273506.columns) {
			  if (ccc17064457956273506.columns[i].column ===flds[0]) {
				  ccc17064457956273506.columns[i].isPK=true;
				  break;
			  }	
		  }
		});
	}
	ccc17064457956265548(sqlLine) {
		// 전처리: 테이블명과 ( 사이에 공백이 없으면 삽입.
		sqlLine = sqlLine.replace(/(\([^ ])/g, " $1");
		// 공백으로 분할
		const commentData = sqlLine.trim().split(/\s+/);
		if (!commentData || commentData.length < 6) {
		if (!chk) this.logError("Invalid table index information. - " + sqlLine);	
			return;
		}
		const tableName = commentData[4];	
		const ccc17064457956273506 = this.tableMap[commentData[4]];
		if (!ccc17064457956273506) {
		    this.logError("Invalid table index information. - " + sqlLine);	
			return;
		}
		
		this._setIndex(ccc17064457956273506, commentData[2], sqlLine);
	}
	_setIndex(ccc17064457956273506, indexName, sqlLine) {
		if (!ccc17064457956273506.indexes) ccc17064457956273506.indexes = [];
		// 괄호 내용 추출
		const match = sqlLine.match(/\(((?:[^()]+|\([^()]*\))*)\)/) ;
	  	if (match) {
			const flds = match[1].split(",");
			flds.forEach((item, index) => {
				flds[index] = item.trim().replace(" ASC", "").replace(" DESC", "");
			  });
			ccc17064457956273506.indexes.push({name: indexName, fields: flds.toString()});
			this.logInfo(`imported Index: ${indexName} - ${ccc17064457956273506.physicalName} (${match[1]})`);
		} else
		    this.logError("Invalid table information. - " + sqlLine);	
	}
	ccc17064457956263305(sqlLine) {
	  const tableMatch = sqlLine.match(/ALTER TABLE\s+([^\s(]+)/i);
      if (!tableMatch) {
		return;
      }
	  this._setRelation(tableMatch[1], sqlLine);
	}

	_setRelation(tablename, sqlLine) {
		//const match = sqlLine.match(/CONSTRAINT[^)]*FOREIGN KEY\s*\([^)]*\)\s*REFERENCES\s*\w+\s*\(\s*([^)]*)\s*\)/g);
		const match = sqlLine.match(/CONSTRAINT[^)]*FOREIGN KEY\s*\([^)]*\)\s*REFERENCES\s*(.*)\s*\(\s*([^)]*)\s*\)/g);
		if (!match) return;
		
		match.forEach((fkStr) => {
			// 전처리 1 - 괄호 앞이나 뒤에 공백이 없으면 공백 추가. 공백으로 자르기 위해 형식 맞춤
			let input = fkStr.replace(/(\S)(\(|\))/g, "$1 $2 ");
			// 전처리 2 - 괄호 안의 공백 제거
			let result = input.replace(/\(([^)]*)\)/g, (match, group) => {
			  return group.replace(/\s/g, "");
			});
			
			const commentData = result.trim().split(/\s+/);
			if (commentData.length >6) {
				this.relationList.push({name:commentData[1], ccc17064457956231309: tablename, ccc17064457956231416: commentData[4], ccc17064457956237958: commentData[6], ccc17064457956249841: commentData[7]});
				this.logInfo(`imported Relation : ${tablename} - ${commentData[6]} `);
			}
			else this.logError("Invalid relationship information. - " + sqlLine);
		})
	}
	_setColumnComment(ccc17064457956273506, column, comment) {
		if (!ccc17064457956273506) return false;
		
		for (const j in ccc17064457956273506.columns) {
			if (ccc17064457956273506.columns[j].column===column) {
				ccc17064457956273506.columns[j].comment = comment.replace(/'/g, "");
				return true;
			}
		}
		return false;
	}	
}

async function generatePreview(parentNode, tableList, relationList, ccc17064457956121750) {
	parentNode.innerText = "";
	
	for (const inx in tableList) {
		await sleep(20);		
		let ccc17064457956273506 = tableList[inx];	
		ddd17064457956125209.ccc17064457956231391(parentNode, "H4", "tableName-span", ccc17064457956273506.physicalName + (ccc17064457956273506.logicalName ? " - " + ccc17064457956273506.logicalName : "") );


		// 테이블 정보
		const tbody = ddd17064457956125209.ccc170644579562485(parentNode);
	
		ccc17064457956273506.columns.forEach((columnData) => {
			ddd17064457956125209.ccc17064457956287665(tbody, "td", [columnData.column, 
								columnData.comment ? columnData.comment : "", 
								columnData.dataType, 
								columnData.defaultValue ? columnData.defaultValue: "",
								columnData.isPK      ? "Y" : "",
								columnData.uniqueKey ? "Y" : "",
								columnData.notNull  ? "Y" : "",
								columnData.ai    ? "Y" : ""
							]);
		});
		
		// 색인 정보
		if (ccc17064457956273506.indexes) {
			const table = ddd17064457956125209.ccc17064457956231391(parentNode, "table");
			ddd17064457956125209.ccc17064457956287665(table, "th", ["Index Name", "Columns"]);
			
			ccc17064457956273506.indexes.forEach((index) => {
				ddd17064457956125209.ccc17064457956287665(table, "td", [index.name, index.fields]);
			});		
		}
		
		parentNode.scrollTop = parentNode.scrollHeight;
	};
	
	if (!relationList || relationList.length === 0) return;
	
	ddd17064457956125209.ccc17064457956231391(parentNode, "H4", "tableName-span", "Relationships" );
	
	const table = ddd17064457956125209.ccc17064457956231391(parentNode, "table");
	ddd17064457956125209.ccc17064457956287665(table, "th", ["Relation Name", "Table", "Columns", "References", "Columns"]);
		
	for (const inx in relationList) {
		const relationData = relationList[inx];	

		ddd17064457956125209.ccc17064457956287665(table, "td", [relationData.name, relationData.ccc17064457956231309, relationData.ccc17064457956231416, relationData.ccc17064457956237958, relationData.ccc17064457956249841]);
    };	
}

async function generateERD(parentNode, tableList, relationList, ccc17064457956121750) {

	const enMap = new Map;

	let BBB17064457956105561 = new BBB17064457956091842(svg.node());

	for (const inx in tableList) {
		await sleep(5);
		let ccc17064457956273506 = tableList[inx];	

		let data = {
			physicalName: ccc17064457956273506.physicalName,
			logicalName: ccc17064457956273506.logicalName,
			keys: ccc17064457956273506.columns.filter(item => item.isPK),
			fields: ccc17064457956273506.columns.filter(item => !item.isPK)
		};
		// 색인 정보
		if (ccc17064457956273506.indexes) data.indexes = ccc17064457956273506.indexes;

		let e1 = new AAA17064457956029536(svg, 0, 0, null, data);
		let ret = BBB17064457956105561.ccc17064457956275587(e1.x2-e1.x1, e1.y2-e1.y1);
		e1.ccc17064457956151322(ret.x, ret.y);
		enMap.set(ccc17064457956273506.physicalName, e1);
	};
	BBB17064457956105561 = null;

	for (const inx in relationList) {
		const relationData = relationList[inx];	
		const er1 = enMap.get(relationData.ccc17064457956231309);
		const er2 = enMap.get(relationData.ccc17064457956237958);
		if (!er1 || !er2) {
			ddd17064457956125209.ccc17064457956231391(parentNode, "span", "log-span", `The entity relationship cannot be created because the entity information is not found. ${relationData.ccc17064457956231309} - ${relationData.ccc17064457956237958}`);
			continue;
		}
		const ccc17064457956231416 = relationData.ccc17064457956231416.split(",");
		const ccc17064457956249841 = relationData.ccc17064457956249841.split(",");
		if (ccc17064457956231416.length !== ccc17064457956249841.length) {
			ddd17064457956125209.ccc17064457956231391(parentNode, "span", "log-span", `The entity relationship cannot be created because the field information linking the two entities is invalid. ${relationData.ccc17064457956231309} - ${relationData.ccc17064457956237958}`);
			continue;
		}

		let r = new AAA17064457956022705(svg, er2, er1, false, makeaaa17064457956034678Type, relationData.name) ;
		if (r.id) {
			r.setRelationFields(ccc17064457956231416, ccc17064457956249841);
			bbb17064457956059005.set(r.id, r );
		}
    };		
}

async function generateTableDesc(logPrinter, tableList, relationList) {
	logPrinter.innerText = "";
	
	for (const value of bbb17064457956052290.values()) {
		let ccc17064457956273506 = value.data;	
		if (!ccc17064457956273506.allFields) continue;
		await sleep(20);		
		ddd17064457956125209.ccc17064457956231391(logPrinter, "H4", "tableName-span", ccc17064457956273506.physicalName + (ccc17064457956273506.logicalName ? " - " + ccc17064457956273506.logicalName : "") );


		// 테이블 정보
		const tbody = ddd17064457956125209.ccc170644579562485(logPrinter);

		ccc17064457956273506.keys.forEach((columnData) => {
			ddd17064457956125209.ccc17064457956287665(tbody, "td", [columnData.column, 
								columnData.comment ? columnData.comment : "", 
								columnData.dataType, 
								columnData.defaultValue ? columnData.defaultValue: "",
								"Y",
								columnData.uniqueKey ? "Y": "",
								columnData.notNull   ? "Y" : "",
								columnData.ai    	 ? "Y": ""
							]);
		});
		ccc17064457956273506.fields.forEach((columnData) => {
			ddd17064457956125209.ccc17064457956287665(tbody, "td", [columnData.column, 
								columnData.comment ? columnData.comment : "", 
								columnData.dataType, 
								columnData.defaultValue ? columnData.defaultValue: "",
								"",
								columnData.uniqueKey ? "Y": "",
								columnData.notNull   ? "Y" : "",
								columnData.ai    	 ? "Y": ""
							]);
		});
		// 색인 정보
		if (ccc17064457956273506.indexes) {
			const table = ddd17064457956125209.ccc17064457956231391(logPrinter, "table");
			ddd17064457956125209.ccc17064457956287665(table, "th", ["Index Name", "Columns"]);
			
			ccc17064457956273506.indexes.forEach((index) => {
				ddd17064457956125209.ccc17064457956287665(table, "td", [index.name, index.fields]);
			});		
		}
		
		logPrinter.scrollTop = logPrinter.scrollHeight;
	};
	
	if (!relationList || relationList.size === 0) return;
	
	ddd17064457956125209.ccc17064457956231391(logPrinter, "H4", "tableName-span", "Relationships" );
	
	const table = ddd17064457956125209.ccc17064457956231391(logPrinter, "table");
	
	ddd17064457956125209.ccc17064457956287665(table, "th", ["Relation Name", "Table", "Columns", "References", "Columns"], ["120px", "70px", "150px", "70px", "150px"]);
		
	for (const relationData of relationList.values()) {
		let relaName = relationData.name ? relationData.name : relationData.id;
		let data = relationData.ccc17064457956285317();

		ddd17064457956125209.ccc17064457956287665(table, "td", [relaName, data.ccc17064457956231309, data.ccc17064457956231416, data.ccc17064457956237958, data.ccc17064457956249841]);
    };	
	const p = ddd17064457956125209.ccc17064457956231391(logPrinter, "P");
	p.innerHTML = "&nbsp;"
	logPrinter.scrollTop = logPrinter.scrollHeight;
}

async function detectRelationshipDialog(logPrinter, tableList, relationList) {
	function getFieldNames(val) {
		const results = [];
		 val.forEach(function(fld) {
			results.push(fld.column);
		});
		return results.toString().replaceAll(",", ",<br/>");
	}
	logPrinter.innerText = "";
	
	ddd17064457956125209.ccc17064457956231391(logPrinter, "H4", "tableName-span", "Relationships" );
	
	const table = ddd17064457956125209.ccc17064457956231391(logPrinter, "table");

	ddd17064457956125209.ccc17064457956287665(table, "th", ["Parent Table", "Parent Columns", "Child Table", "Child Columns", ""], ["120px", "120px", "120px", "120px", "50px"]);

	for (const valueP of bbb17064457956052290.values()) {
		if (!valueP.data.allFields || valueP.data.keys.length===0) continue;
		await sleep(20);
		//make relation list - 빠른 검색용	
		const relationList=[];
		for (const relationData of valueP.ccc17064457956171318) {
			relationList.push(relationData.ccc17064457956121730.id);
		}
		for (const relationData of valueP.ccc17064457956165273) {
			relationList.push(relationData.ccc17064457956121730.id);
		}

		const parentKeys = valueP.data.keys;	
		for (const valueC of bbb17064457956052290.values()) {
			if (!valueC.data.allFields || valueP.id === valueC.id || relationList.includes(valueC.id)) continue;

			const fldList =[];
			for (const keyFld of parentKeys) {
				const field = valueC.getMyField(keyFld.column)
				if (!field) break;   // 부모키들 중에 하나라도 해당하는 자식 필드가 없으면 연관이 없는 것으로
				fldList.push(field);
			}
			if (fldList.length === parentKeys.length) {
				ddd17064457956125209.ccc17064457956287665(table, "td", [valueP.data.physicalName, getFieldNames(parentKeys), valueC.data.physicalName, getFieldNames(fldList), "<input type='checkbox' checked='checked'>"]);
			}
		}
		logPrinter.scrollTop = logPrinter.scrollHeight;
	};

	const p = ddd17064457956125209.ccc17064457956231391(logPrinter, "P");
	p.innerHTML = "&nbsp;"
	logPrinter.scrollTop = logPrinter.scrollHeight;
}

async function highlightSQL (sqlCode, sqlEditor) {
	const sqlKeywords = ["CREATE", "ALTER", "TABLE", "INDEX", "CONSTRAINT", "PRIMARY", "FOREIGN", "KEY", "EXEC", "ON", "COMMENT", "NOT", "NULL", "DEFAULT", "COLUMN"];
	sqlEditor.innerText = "";
	sqlCode = sqlCode.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm,""); // 주석 제거
	sqlCode = sqlCode.replace(/--(.)*[\n,\r]*/g,""); // 주석 제거

	let cnt = 0;
	const ccc17064457956283674 = sqlCode.split(/\n/);
	for (const sqlLine of ccc17064457956283674) {
		if (++cnt % 50 ===0) {
			await sleep(5); 
			sqlEditor.scrollTop = sqlEditor.scrollHeight;
		}
		let formattedSQL = "";
		const sqlWords = sqlLine.replaceAll(",", ", ").split(/\s/);
		for (let sqlWord of sqlWords) {
		  if (!sqlWord) {
			formattedSQL += " ";
			continue;
		  }
		  
		  let match = sqlWord.match(/[,;]$/); // 단어 마지막 붙은 ,에 공백 넣어 단어만 추출되도록
		  if (match) {
			  sqlWord = sqlWord.replace(match, "");
			  match += " "
		  } else match=" ";
		  
		  if (sqlKeywords.includes(sqlWord.toUpperCase())) {
			formattedSQL += `<span class="sql-keyword">${sqlWord}</span>` + match;
		  } else if ( (sqlWord.startsWith("'")|| sqlWord.startsWith("N'")) && sqlWord.endsWith("'")) {
			formattedSQL += `<span class="sql-string">${sqlWord}</span>` + match;
		  } else {
			formattedSQL += sqlWord + match;
		  }
		}
		const p = ddd17064457956125209.ccc17064457956231391(sqlEditor, "p", "sql-formatted", null);
		p.innerHTML = formattedSQL;
	}
}		

class BBB17064457956091842 {
	constructor(svg) {
		this.svg = svg;
		this.parentElement = svg.parentNode;

		this.BBB17064457956085497_GAP = 20; // 간격
		this.ccc17064457956282387InSession = 0;
		this.ccc17064457956282387 = 0;											// 한 행내에서 가장 큰 높이
		this.beforeWidth = 0;         								// 이전 크기. 현재 X 좌표 = 이전 좌표 + 이전 크기 + BBB17064457956085497_GAP
		this.ccc17064457956277342 = {x: this.BBB17064457956085497_GAP, y: this.BBB17064457956085497_GAP}; // 출력할 개체의 위치
		this.ccc1706445795627513 = {x: 0, y:0};								// 분할 화면의(section) 위치
		
		this.ccc17064457956274826 = {y: parseInt(svg.getAttribute("height")), x: parseInt(svg.getAttribute("width")) };
		
		// 분활 화면 크기: 분활 화면이란(section) 사용자에게 보여지는 부분. svg가 크고 보여지는 div의 부분이 작으면 div, svg가 작으면 svg
		this.ccc17064457956273487 = {x: Math.min(svg.parentNode.clientWidth+17, this.ccc17064457956274826.x), y: Math.min(svg.parentNode.clientHeight+17, this.ccc17064457956274826.y) };
	}
	
	ccc17064457956275587(width, height) {
		if (height > this.ccc17064457956282387) this.ccc17064457956282387 = height;
	
		this.ccc17064457956277342.x += this.beforeWidth;
		
		if (this.ccc17064457956277342.x + width + this.BBB17064457956085497_GAP > this.ccc1706445795627513.x + this.ccc17064457956273487.x  || 	// 한 행의 너비(한 분활의 width 크기)보다 크면 다음 행(Y)으로 
		    this.ccc17064457956277342.x + width + this.BBB17064457956085497_GAP > this.ccc17064457956274826.x  ) {							// SVG의 너비보다 크면 다음 분활 화면(Y)으로 

			//console.log(`---------------------------- ${this.ccc17064457956277342.x}  : ${this.ccc17064457956277342.y},    ${this.ccc1706445795627513.x} :  ${this.ccc1706445795627513.y}  - ${this.ccc17064457956282387}`);
			this.ccc17064457956277342.y += this.ccc17064457956282387 + this.BBB17064457956085497_GAP;
			this.ccc17064457956282387 = height;
			if (this.ccc17064457956277342.y + height > this.ccc1706445795627513.y + this.ccc17064457956273487.y || this.ccc17064457956277342.y + height >= this.ccc17064457956274826.y ) {   // 한 분활 화면을 다 채웠으면(한 분활의 height 크기) 다음 X 분활 화면으로 
			//	console.log(`========================= ${this.ccc17064457956277342.y}  -  ${height},   ${this.ccc1706445795627513.y}  - ${this.ccc17064457956273487.y}`);
				this.ccc17064457956282387InSession = Math.max(this.ccc17064457956282387InSession, this.ccc17064457956277342.y);
				this.ccc1706445795627513.x += this.ccc17064457956273487.x;
				this.ccc17064457956277342.y = this.ccc1706445795627513.y + this.BBB17064457956085497_GAP;
				this.parentElement.scrollLeft = this.ccc1706445795627513.x;					
			}
			if (this.ccc1706445795627513.x >= this.ccc17064457956274826.x) {			 // SVG의 너비보다 크면(X 분활을 다 채웠으면) 다음 Y 분활로 
				this.ccc1706445795627513.x = 0;
				this.ccc1706445795627513.y = this.ccc17064457956282387InSession;
				this.ccc17064457956277342.y = this.ccc1706445795627513.y + this.BBB17064457956085497_GAP;
				if (this.ccc17064457956277342.y + height  >= this.ccc17064457956274826.y ) {
					this.ccc17064457956274826.y = this.ccc17064457956277342.y + this.ccc17064457956273487.y;
					this.svg.setAttribute("height", this.ccc17064457956274826.y);
					//this.svg.style.height = this.ccc17064457956274826.y+"px"
				}
				this.parentElement.scrollTop = this.ccc17064457956274826.y - this.BBB17064457956085497_GAP;
				this.parentElement.scrollLeft = 0;
			}
			this.ccc17064457956277342.x = this.ccc1706445795627513.x + this.BBB17064457956085497_GAP;
		}
		
		this.beforeWidth = width + this.BBB17064457956085497_GAP;
		//console.log(`${this.ccc17064457956277342.x}  : ${this.ccc17064457956277342.y},    ${width}  :    ${height}`);
		return {x:this.ccc17064457956277342.x, y:this.ccc17064457956277342.y};
	}	  
}

class AAA17064457956281292 {
	constructor(svg) {
		this.initialize(svg);
	}
	
	initialize(svg) {
		this.selectedRect = svg.append("rect")
				.attr("class","selectRect")
				.classed('hide', false);
		this.AAA17064457956293212 = [];
	}

	setPosition(x1, y1, x2, y2) {
		this.selectedRect
			.attr("x", 		Math.min(x1, x2))
			.attr("y", 		Math.min(y1, y2))
			.attr("width",  Math.abs(x2 - x1))
			.attr("height", Math.abs(y2 - y1)).classed('hide', false);
	}

	setEntityPosition(ccc17064457956203613, ccc17064457956213394) {
		this.AAA17064457956293212.forEach(item => {
			item.ccc17064457956206601(ccc17064457956203613, ccc17064457956213394 );
		});	
	}

	deselectaaa17064457956034678(selectedaaa17064457956034678, ccc17064457956131213) {
		// 기존 선택 취소
		this.AAA17064457956293212.forEach(item => {
			item.deselectaaa17064457956034678();
		});		
		this.AAA17064457956293212.length = 0;		
		// 선택된 하나 등록
		if (selectedaaa17064457956034678) {
			selectedaaa17064457956034678.selectaaa17064457956034678(ccc17064457956131213);
			this.AAA17064457956293212.push(selectedaaa17064457956034678);
		}
	}

	selectaaa17064457956034678(x1, y1, x2, y2) {
		this.selectedRect.classed('hide', true);

		const CCC1706445795629873 = {
			x1: Math.min(x1, x2),
			y1: Math.min(y1, y2),
			x2: Math.max(x1, x2),
			y2: Math.max(y1, y2)
		};

		for (const item of bbb17064457956052290.values()) {
			if ( !(item.x1 > CCC1706445795629873.x2 ||
				item.x2 < CCC1706445795629873.x1 ||
				item.y1 > CCC1706445795629873.y2 ||
				item.y2 < CCC1706445795629873.y1) ) {
				item.selectaaa17064457956034678();
				this.AAA17064457956293212.push(item);
			}			
		}
		for (const item of bbb17064457956065496.values()) {
			const CCC1706445795629448 = item.fieldText.node().getBBox();
			if ( !(CCC1706445795629448.x > CCC1706445795629873.x2 ||
				CCC1706445795629448.x + CCC1706445795629448.width < CCC1706445795629873.x1 ||
				CCC1706445795629448.y > CCC1706445795629873.y2 ||
				CCC1706445795629448.y + CCC1706445795629448.height  < CCC1706445795629873.y1) ) {
				item.selectaaa17064457956034678();
				this.AAA17064457956293212.push(item);
			}	
		}
	}

	getSelectaaa17064457956034678State() {
		const AAA17064457956293212 = [];
		for (const item of this.AAA17064457956293212) {
			const data = {
				id: item.id,
				x1: item.x1,
				y1: item.y1,
			}
			AAA17064457956293212.push(data);
		}
		return AAA17064457956293212;
	}

	// 선택된 dia가 리스트에 있는 것인지 확인
	AAA17064457956291121(selectedaaa17064457956034678) {
		let found = false;

		this.AAA17064457956293212.forEach(item => {
			if (item === selectedaaa17064457956034678) {
				found = true;
				return false;
			}
		});

		return found;
	}
}

const BBB17064457956073451 = {
	ccc17064457956071022: "ec",
	ccc17064457956078498: "er",
	ccc17064457956087683: "em",
	ccc1706445795608607:   "m",
	ccc17064457956083421: "rc",
	ccc17064457956084541: "rr",
	ccc17064457956086097: "rm",
};	

class aaa17064457956034678Stack {
	constructor() {
		this.ccc17064457956299925();
	}

	ccc17064457956299925() {
		this.CCC17064457956303187 = [];
		this.aaa1706445795630462 = -1;
		this.bbb17064457956225485 = false; // 수정 여부
	}

	CCC17064457956306203(workType, workaaa17064457956034678, backupData) {
		const data = {workType: workType};

		if (workType===BBB17064457956073451.ccc17064457956083421 || workType===BBB17064457956073451.ccc17064457956084541){
			data.id = workaaa17064457956034678.id;
			data.relationType = workaaa17064457956034678.relationType;
			data.pid = workaaa17064457956034678.ccc17064457956129725.id;
			data.cid = workaaa17064457956034678.ccc17064457956121730.id;
		} else 
		if (workType===BBB17064457956073451.ccc1706445795608607){
			data.data = workaaa17064457956034678;
		} else {
			data.id = workaaa17064457956034678.id;
			data.x1 = workaaa17064457956034678.x1;
			data.y1 = workaaa17064457956034678.y1;
			data.data = ddd17064457956125209.ccc17064457956123580(workaaa17064457956034678.data)
			data.diagramType = workaaa17064457956034678 instanceof AAA17064457956029536 ? BBB17064457956046431.BBB17064457956085497 : BBB17064457956046431.TEXT; 

			if (backupData) {  // 개체 수정일 경우에는 현재 정보가 백업이고, backupData가 이전 정보
				data.backupData = data.data;
				data.data = backupData;
			}
			if (workType!==BBB17064457956073451.ccc17064457956071022 && data.diagramType === BBB17064457956046431.BBB17064457956085497) {
				data.relationData = workaaa17064457956034678.ccc17064457956285317();
			}
		}
		this.CCC17064457956303187.length = ++this.aaa1706445795630462;
		this.CCC17064457956303187.push(data);
		this.bbb17064457956225485 = true;
		//console.info("CCC17064457956306203 - " + workType);
	}

	ddd17064457956308863() {
		if (this.aaa1706445795630462 === -1 ) return;

		const ccc17064457956305709 = this.CCC17064457956303187[this.aaa1706445795630462--];
		switch(ccc17064457956305709.workType) {
			case BBB17064457956073451.ccc17064457956083421: bbb17064457956059005.get(ccc17064457956305709.id).removeaaa17064457956034678(); break;
			case BBB17064457956073451.ccc17064457956084541: bbb17064457956059005.set(ccc17064457956305709.id, new AAA17064457956022705(svg, bbb17064457956052290.get(ccc17064457956305709.pid), bbb17064457956052290.get(ccc17064457956305709.cid), true, ccc17064457956305709.relationType, ccc17064457956305709.id) ); break;
			case BBB17064457956073451.ccc17064457956071022: this._bbb17064457956309084(ccc17064457956305709.id).removeaaa17064457956034678(); break;
			case BBB17064457956073451.ccc17064457956078498:  
				if (ccc17064457956305709.diagramType === BBB17064457956046431.BBB17064457956085497) {
					new AAA17064457956029536(svg, ccc17064457956305709.x1, ccc17064457956305709.y1, ccc17064457956305709.id, ccc17064457956305709.data);
					for (const key in ccc17064457956305709.relationData) {
						let item = ccc17064457956305709.relationData[key];
						bbb17064457956059005.set(item.id, new AAA17064457956022705(svg, bbb17064457956052290.get(item.pid), bbb17064457956052290.get(item.cid), false, item.relationType, item.id) );
					}					
				} else {
					new AAA17064457956023974(svg, ccc17064457956305709.x1, ccc17064457956305709.y1, ccc17064457956305709.id, ccc17064457956305709.data);
				}
				break;
			case BBB17064457956073451.ccc17064457956087683: this._bbb17064457956309084(ccc17064457956305709.id).ccc17064457956212577(ccc17064457956305709.data); break;
			case BBB17064457956073451.ccc1706445795608607:  
				for (const item of ccc17064457956305709.data) {
					const workaaa17064457956034678 = this._bbb17064457956309084(item.id);
					if (!item.x2) {  // redo를 대비해서 현재 좌표를 저장 
						item.backupX = workaaa17064457956034678.x1;
						item.backupY = workaaa17064457956034678.y1;
					}
					workaaa17064457956034678.ccc17064457956151322(item.x1, item.y1);
				}
				break;
		}
	}

	aaa17064457956309705() {
		if (this.aaa1706445795630462 >= this.CCC17064457956303187.length - 1) return;
		const ccc17064457956305709 = this.CCC17064457956303187[++this.aaa1706445795630462];

		switch(ccc17064457956305709.workType) {
			case BBB17064457956073451.ccc17064457956083421: 
				bbb17064457956059005.set(ccc17064457956305709.id, new AAA17064457956022705(svg, bbb17064457956052290.get(ccc17064457956305709.pid), bbb17064457956052290.get(ccc17064457956305709.cid), false, ccc17064457956305709.relationType, ccc17064457956305709.id) );
				break;			
			case BBB17064457956073451.ccc17064457956084541: bbb17064457956059005.get(ccc17064457956305709.id).removeaaa17064457956034678(); break;
			case BBB17064457956073451.ccc17064457956071022: 
				if (ccc17064457956305709.diagramType===BBB17064457956046431.BBB17064457956085497) 
				     new AAA17064457956029536(svg, ccc17064457956305709.x1, ccc17064457956305709.y1, ccc17064457956305709.id, ccc17064457956305709.data); 
				else new AAA17064457956023974(svg, ccc17064457956305709.x1, ccc17064457956305709.y1, ccc17064457956305709.id, ccc17064457956305709.data); 
				break;
			case BBB17064457956073451.ccc17064457956078498: this._bbb17064457956309084(ccc17064457956305709.id).removeaaa17064457956034678(); break;
			case BBB17064457956073451.ccc17064457956087683: this._bbb17064457956309084(ccc17064457956305709.id).ccc17064457956212577(ccc17064457956305709.backupData); break;
			case BBB17064457956073451.ccc1706445795608607:  
				for (const item of ccc17064457956305709.data) {
					this._bbb17064457956309084(item.id).ccc17064457956151322(item.backupX, item.backupY);
				}
				break;
		}
	}

	_bbb17064457956309084(id) {
		let workaaa17064457956034678 = bbb17064457956052290.get(id);
		if (!workaaa17064457956034678) workaaa17064457956034678 = bbb17064457956065496.get(id);
		return workaaa17064457956034678;
	}
}

var findaaa17064457956034678 = {
	AAA17064457956314812: [],
	aaa1706445795630462: -1,
	CCC17064457956314920: null,
	nextaaa17064457956034678(CCC17064457956314920) {
		if (this.CCC17064457956314920 !== CCC17064457956314920) {
			this._findaaa17064457956034678(CCC17064457956314920);
		}
		if (this.aaa1706445795630462 >= this.AAA17064457956314812.length - 1) this.aaa1706445795630462 = -1;

		AAA17064457956291595.deselectaaa17064457956034678(this.AAA17064457956314812[++this.aaa1706445795630462], ccc17064457956131213);
	},
	previousaaa17064457956034678(CCC17064457956314920) {
		if (this.CCC17064457956314920 !== CCC17064457956314920) {
			this._findaaa17064457956034678(CCC17064457956314920);
		}
		if (this.aaa1706445795630462 === 0 ) this.aaa1706445795630462 = this.AAA17064457956314812.length;

		AAA17064457956291595.deselectaaa17064457956034678(this.AAA17064457956314812[--this.aaa1706445795630462], ccc17064457956131213);
	},
	_findaaa17064457956034678(CCC17064457956314920) {
		if (CCC17064457956314920.length < 2) {
			alert("Enter at least 2 characters");
			return;
		}		
		this.CCC17064457956314920 = CCC17064457956314920;
		this.AAA17064457956314812 = [];
		this.aaa1706445795630462 = -1;
		const regex = new RegExp(CCC17064457956314920, 'i');
		for (const value of bbb17064457956052290.values()) {
			//if (value.data.physicalName.includes(CCC17064457956314920) || value.data.logicalName.includes(CCC17064457956314920))
			if (regex.test(value.data.physicalName) || regex.test(value.data.logicalName))
			this.AAA17064457956314812.push(value);
		}
		if (this.AAA17064457956314812.length===0) alert("The entiry name you entered was not found.");
	}

}
