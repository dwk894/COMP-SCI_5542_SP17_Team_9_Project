import org.apache.spark.mllib.feature.Word2Vec
import org.apache.spark.{SparkConf, SparkContext}

/**
  * Created by Dayu Wang on 03/11/2017.
  */
object Word2Vec_Processor {
  def main(args: Array[String]): Unit = {
    System.setProperty("hadoop.home.dir", "C:/winutils")
    val conf = new SparkConf().setAppName("Word2Vec_Processor").setMaster("local[*]")
    val sc = new SparkContext(conf)
    val input = sc.textFile("data/training/Basic_Emotions.txt").map(line => line.split(" ").toSeq)
    val word2vec = new Word2Vec().setMinCount(0).setVectorSize(2)
    val model = word2vec.fit(input)
    scala.tools.nsc.io.File("data/output/result.txt").writeAll("")
    input.foreach(f => {
      f.foreach(g => {
        var v = model.getVectors(g)
        println(g + ": (" + v.mkString(", ") + ")")
        scala.tools.nsc.io.File("data/output/result.txt").appendAll(g + ": (" + v.mkString(", ") + ")" + "\n")
      })
    })
    sc.stop()
  }
}