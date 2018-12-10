---
layout: post
title:  "Notes on 'Tractatus Logico-Philosophicus'"
date:   2018-12-02 15:00:00 +0100
categories: booknotes
tags: language
permalink: /tractatus-logico-philosophicus
---
> Perhaps this book will be understood only by someone who has himself already had the thoughts that are expressed in it– or at least similar thoughts.– So it is not a textbook.– Its purpose would be achieved if it gave pleasure to one person who read and understood it.
>
> -- __Tractatus__

Everyone has looked up to the sky and asked The Big Questions: why are we here, what's our purpose, what's the meaning of life. The fact that those questions have remained unanswered for all history is a testament that they are either impossible to answer, or that we have been framing them wrong all along. In this context, Ludwig Wittgenstein publishes the [Tractatus Logico-Philosophicus](https://www.amazon.com/Tractatus-Logico-Philosophicus-Ludwig-Wittgenstein/dp/1602064512), to identify the relationship between language and reality and to define the limits of science. Its title is a homage to Baruch Spinoza's [Tractatus Theologico-Politicus](https://www.amazon.com/Theologico-Political-Treatise-Tractatus-Theologico-Politicus-Translated-Contents-ebook/dp/B006LG24I8/ref=sr_1_1?s=books&ie=UTF8&qid=1543868621&sr=1-1&keywords=tractatus+spinoza).

The book is cryptic. That's not just me; even the author himself, in a letter to Bertrand Russell, agrees.

> I’ve written a book called “Logisch-Philosophische Abhandlung” containing all my work of the last six years. I believe I’ve solved our problems finally. This may sound arrogant but I can’t help believing it [...] [O]f course [...] nobody will understand it; although I believe, it’s all as clear as crystal.
>
> Wittgenstein, in a letter to Russell, March 1919

Two features make the Tractatus challenging. First, [its format](http://www.tractatuslogico-philosophicus.com/): 7 propositions that are explained by nested clauses that link back to the parent like a bushy tree. The second difficulty for the reader is an apparent dissonance within the book itself; after appearing to put forward logical, linguistic and meta-philosophical theories in the body of the text, the author writes:

> My propositions are elucidatory in this way: he who understands me finally recognizes them as senseless, when he has climbed out through them, on them, over them. (He must so to speak throw away the ladder, after he has climbed up on it.) He must transcend these propositions, and then he will see the world aright.
>
> -- __Tractatus__

Essentially, the book has, all at once, the resemblance of a mathematical proof and the language of a parable, with the added feature that the author aimed at confusing the hell out of the reader.

The book is obscure and fascinating. There is something intriguing about it that reminded me when I was attending a lecture on Calculus at university, and we were learning about the [Cauchy's concept of limit](https://en.wikipedia.org/wiki/(%CE%B5,_%CE%B4)-definition_of_limit) for the first time:

> $${\displaystyle \lim_{x\to c}f(x)=L\iff (\forall \varepsilon >0,\,\exists \ \delta >0,\,\forall x\in D,\,0<|x-c|<\delta \ \Rightarrow \ |f(x)-L|<\varepsilon )}$$

Talking about cryptic. But once it clicks, and it just happens, my Calculus professor said, it all make sense. You just need to keep going, internalise what you already understand, and let the rest settle. Just like in [How to read a book](/how-to-read-a-book): *Don't pay attention to your literature teachers: read. Read it at one sitting, without stopping to look up weird words, or ponder what you don't understand right away. You'll have a much better chance of understanding it when you're done*.

Of course, I didn't understand the book the first time I read it. But that's because reading, as we learned in [How to Read a Book](/how-to-read-a-book), doesn't end there. I'm still reading it now, by writing. To structure these notes, I allowed myself to leave some important propositions (like 4.3) without explanation.

## Introduction by Betrand Russell

Let's go over the introduction to see how much can we get out of the book before even reading it, just by looking at how Mr Russell summarised its key ideas:

> Wittgenstein is concerned with the conditions for a logically perfect language, [...] the whole function of a language is to have meaning, and it only fulfils that function in proportion as it approaches to the conditions of an ideal language.
>
> -- __Betrand Russell__

In practice, language is always more or less vague; what we assert is never quite precise. Thus, logic has two problems.

1. The conditions for sense rather than nonsense when combining symbols.
2. The conditions for uniqueness of meaning or reference in symbols or their combination.

> Two people can be using the same word, meaning different things, yet continue the conversation. That's fine for coffee, but not when making decisions.
>
> -- __[Skin in the Game](skin-in-the-game)__

The first requisite for an ideal language would be that there should be one name for every concept, and never the same name for two different concept. Of course, your daily used English doesn't operate that way: it has evolved to be useful, not to be accurate. It's, like Taleb would say, "Lindy compatible". And if that annoys you, be aware that your eyes have evolved pretty much in the same way: optical illusions are a consequence of that.

No, your language isn't ideal, in the sense that Russell is conveying. English, like any other language on Earth, has focused on a tiny subset of concepts that are easy to memorise, easy to apply, and possibly easy to reuse in different context. That's why 'easy' in the previous sentence was applied to each action, although it meant not quite the same thing in each case: to provide both a more approachable context for you to understand the sentence, and to give musicality to the whole so that it sticks.

In a logically perfect language, however, nothing that is not simple will have a simple symbol, but a complex containing the symbols for the parts. Thus, words like 'moral', 'beauty', 'rightfulness' contain an inference of what the speaker thinks those words mean, which indeed causes reasoning about them to be self-referential and, thus, a useless tautology. Most questions and propositions of the philosophers result from the fact that we do not understand the logic of our language.

> [Wittgenstein] compares linguistic expressions to projections in Geometry. A geometrical figure may be projected in many ways, each of them corresponding to a different language, but the projective properties of the original figure remain unchanged regardless of these ways may be adopted. [...] The gramophone record, the musical thought, the score, the waves of sound, all stand to one another in that pictorical internal relation which holds between language and the world. To all of them the logical structure is common, and they are all in certain sense one.
>
> -- __Betrand Russell__

"We make ourselves pictures of facts" is indeed the catchy phrase encapsulating this. That we are not looking at the world, but instead we are modelling it by means of our own language, as it is the way we process thoughts. Because what cannot be thought, cannot be said. __The object of philosophy should be the clarification of those thoughts__, not to make a certain number of 'philosophical propositions'.

The world consists of facts; which cannot be directly said, but are what make propositions true or false. If we can reduce the world to a set of simple, or atomic, facts, independent to each other like a canonic base of vectors, then we can fully describe the world, so long as those are all of them. It's like the 5 axioms of Euclides' [Elements of Geometry](https://www.amazon.com/Euclids-Elements-Geometry-Classic-Reprint/dp/B008HV6DXC), the building blocks of the whole corpus of the book.

We can also extend the analogy by saying that, once we have a uniform method of construction of propositions as truth functions that are born from propositions that declare those atomic facts, logic can be defined as the corpus that results from that set of atomic propositions, in the same way that Geometry follows from Euclides' 5 axioms and Electromagnetism follows from Maxwell's equations. Even the fact that Newtonian mechanics does not hold logically from Maxwell's equations prompted Einstein to look at the world from a different angle, and eventually came up with special relativity.

> It is known that Maxwell's electrodynamics—as usually understood at the present time—when applied to moving bodies, leads to asymmetries which do not appear to be inherent in the phenomena. [...] [It] suggests that the phenomena of electrodynamics as well as of mechanics possess no properties corresponding to the idea of absolute rest. They suggest rather that, as has already been shown to the first order of small quantities, the same laws of electrodynamics and optics will be valid for all frames of reference for which the equations of mechanics hold good.
>
> -- __Einstein__, [On the Electrodynamics of moving bodies](http://www.fourmilab.ch/etexts/einstein/specrel/www/).

But using group theory on logic also brings its problems with it. Gödel's paradox, which we also introduced in [Skin in the Game](/skin-in-the-game), can be reduced to "groups cannot speak about themselves". Given that logic is how we see the world, it cannot contain whether the world exists or not: that would lead to absurdities. Therefore, logic restrains the possibilities of the world, but not what does exist in the world.

That the world is my world appears in the fact that the boundaries of language indicates the boundaries of my world. The fact that there is no word in English for certain things such as *sonder*, the Finnish word for the feeling you get when you realise that the strangers you are surrounded by on the street have lives as deep as yours, is related to the fact that most non-Finnish people haven’t realised that; giving names to certain aspects of our lives sheds light to them.

But what about belief? In all cases related to belief (doubt, consider, desire, etc), it seems natural to say *A doubts p*, which makes it appear as though we were dealing with a relation between a person and a proposition. But the proposition is not about whether what is believed is true or false, but about whether the person believes or not what he or she claims to believe.

Wittgenstein’s attitude towards the mystical grows naturally out of his doctrine. The logical proposition is a picture of the fact, and has in common with the fact a certain structure. This structure is what makes it capable of being a picture of the fact, but the structure cannot be put into words. Think of the word 'fridge', short of 'refrigerator'. It conveys the sense of cold, and that sense is complemented by its translation into German ('*Kühlschrank*', literally 'cold closet'), and Spanish ('*nevera*', which comes from *nieve*, 'snow', which was the main component of the fridge when it was invented). Everything, therefore, involved in the very idea of the expressiveness of a language must remain incapable of being expressed in language, as it is inexpressive in a perfectly __precise sense__.

> The right method of teaching philosophy would be to confine oneself to propositions of the sciences, stated with all possible clearness and exactness, leaving philosophical assertions to the learner, and proving to him that they are meaningless.
>
> __Betrand Russell__

## 1 - The World is all that is the case

Let's now jump into the book itself. As we discussed, the book follows an schematic format, with 7 main propositions that branch out. See the first proposition branching out for yourself:


    1 The world is all that is the case.

       1.1 The world is the totality of facts, not of things.

            1.1.1 The world is determined by the facts, and by their being all the facts.

            1.1.2 For the totality of facts determines what is the case, and also whatever is not the case.

            1.1.3 The facts in logical space are the world.

       1.2 The world divides into facts.

            1.2.1 Each item can be the case or not the case while everything else remains the same.

What the author is conveying here is that we shouldn't be concerned with things, because they cannot be communicated. To us, the world consists of things we can communicate to each other and to ourselves (think), that's why the world consists of facts.

## 2 - What is the case (a fact) is the existence of state of affairs.

A state of affairs is a combination of objects. It’s the state of things. If things can occur in states of affairs, this possibility must be in them from the beginning: special relativity is contained in Maxwell’s equations. Things are, then, independent from each other, but connected with states of affairs, the logical framework of the world they belong to: a speck in the visual field must have colour, a musical note must have a pitch, and so on. Their independence also means that it's impossible for words to appear in two different roles.

Each object, or term, as we called them in [How to Read a Book](/how-to-read-a-book) is in a space of possible states of affairs. They make up the substance of the world, and if they had no substance, then whether a proposition had sense would depend on whether another proposition is true. In that case, we couldn’t sketch any picture of the world. This is more or less what Descartes proposed: *[cogito ergo sum](https://en.wikipedia.org/wiki/Cogito,_ergo_sum)*. An imagined world, however different, must have something in common with ours (how weird would be watching a movie that cannot be described?). However, it’s only by means of propositions that material properties are represented: objects are colourless.

And in the same way, we don't compare objects, but properties. If there is nothing to distinguish a thing, I cannot do it, because I cannot indicate what is different. Reality is only reachable through our senses; it is perceived by a subject, not something that’s there.

In a state of affairs, objects fit into one another like links of a chain: they stand in a determined relation to one another, which is the structure of the state of affairs: form is the possibility of structure.

The totality of existing states of affairs is the world, and determine those that do not exist. That is reality.

### 2.1 -  We picture facts to ourselves.

A picture is a model of reality. In a picture, objects have the elements of the picture corresponding to them. Those elements are the representative of objects, and their relations represent relations between elements in the corresponding object. If we call this connection the *structure*, and the possibility of this structure the *pictorical form*, then this form is also the possibility that things are related to one another in the same way as the elements of the picture. If that is so, we can explore the possibility that the picture accurately represents the object it refers to, but also entertain that no analogy is perfect, and that they always fail to some extent: __the map isn't the territory__, which is an idea that we have already seen in [Skin in the Game](/skin-in-the-game). Conceived this way, it also includes the structure, which makes it into a picture. This pictorical relationship consists of correlations of the picture’s elements with things.

If a fact is to be a picture, it must have something in common with what it depicts. What a picture must have in common with reality is, of course, its pictorical form. A picture cannot, however, depict its pictorical form: it can only display it. We cannot pinpoint exactly how gravity follows the formula $$F=G{\frac {m_{1}m_{2}}{r^{2}}}\ $$; what we can do is look at the sky and watch the movements of the planets, and see whether that structure applies or not. __A picture represents its subject from a position outside it; that’s why it can represent it correctly or incorrectly__.

What any picture must have in common with reality is its logical form, the form of reality. In fact, only logical pictures can depict the world. This is another way to say: "the world is consistent". And if that is so, logic must be inherently a part of the world, otherwise Gödel's paradox would put us in an inconsistent position.

### 2.2 - A picture has logico-pictorical form in common with what it depicts.

A picture depicts reality by representing a possibility of existence and non-existence of states of affairs: that's [Boolean's Law of complementation](https://en.wikipedia.org/wiki/Boolean_algebra#Nonmonotone_laws). By representing all possibilities within logic, it contains all possible states of affairs, so that everything else is illogical and cannot happen: it represents sense.

In order to tell whether a picture Is true or false we must compare it with reality: It’s impossible to tell from a picture whether it’s true or false; there are no a priori true pictures.

## 3 - A logical picture of facts is a thought.
We can picture states of affairs to ourselves, as they are ‘thinkable’, and what is thinkable is possible too.

Thought can never be anything illogical, since we cannot think illogically. It is said that God could create anything except what would be contrary to the laws of logic; the truth is however that we couldn’t say what an illogical world would look like.

> "[Can God create a stone so heavy that it cannot lift it?](https://en.wikipedia.org/wiki/Omnipotence_paradox#Omnipotence_doesn't_mean_breaking_the_laws_of_logic)"

It is as impossible to represent in language anything that contradicts logic. Though a state of affairs that would contravene the laws of physics can be represented by us spatially, one that would contravene the laws of geometry cannot.

### 3.1 - In a proposition, a thought finds an expression that can be perceived by the senses.

We use the perceptible sign of a proposition as a projection of a possible situation. Wittgenstein calls the sign with which we express a thought a propositional sign, although since we covered [How to Read a Book](/how-to-read-a-book), we've been calling it a "sentence". A proposition includes all that the projection includes, but not what is projected. It contains the form, but not the content, of its sense.

What constitutes a propositional sign is that in it, the words stand in a determinate relation to one another: a propositional sign is a fact. That is, grammar and other rules are to be followed: a set of names can’t express a sense, only facts can, and although a propositional sign is a fact, this is obscured by the usual form of expression in writing. For in a printed proposition, for example, no essential difference is apparent between a object, what we mean, and a word, what we say.

__Names are like points; propositions like arrows: they have sense__.

### 3.2 - In a proposition, a thought can be expressed in such a way that elements of the propositional sign correspond to the objects of the thought.

Those are *simple signs*, and such a proposition is *completely analysed*. The simple signs employed in propositions are called names, and they mean an object. In fact, the object is the meaning of that name. In a proposition, a name is representative of an object.

Objects can only be named, signs are their representatives: I can only speak about objects, I can only do so much when trying to put them into words. Propositions can only say how things are, not what they are. We are like [blind men looking at an elephant](https://en.wikipedia.org/wiki/Blind_men_and_an_elephant).

> A group of blind men heard that a strange animal, called an elephant, had been brought to the town, but none of them were aware of its shape and form. Out of curiosity, they said: "We must inspect and know it by touch, of which we are capable". So, they sought it out, and when they found it they groped about it.
>
> In the case of the first person, whose hand landed on the trunk, said "This being is like a thick snake".
>
> For another one whose hand reached its ear, it seemed like a kind of fan.
>
> As for another person, whose hand was upon its leg, said, the elephant is a pillar like a tree-trunk.
>
> The blind man who placed his hand upon its side said, "elephant is a wall".
>
> Another who felt its tail, described it as a rope.
>
> The last felt its tusk, stating the elephant is that which is hard, smooth and like a spear.
>
> -- __The blind men and the elephant__, a parable

This is like the countless ways [God is named across cultures](https://en.wikipedia.org/wiki/Names_of_God): each one projects qualities of the concept, but not all of them.

On more physical concepts, we use definitions to encapsulate a broad and complex sense into a simple word; that’s why dictionaries are so useful. On the other side, a name cannot be dissected any further by means of a definition: it’s a primitive sign. A definition only clarifies, points the way. And what signs fail to express, their application shows. The meanings of primitive signs can be explained by means of examples.

Again, names are points, and propositions are arrows.

### 3.3 - Only in the nexus of a proposition does a name have meaning.

Any part of a proposition that characterises its sense is an expression. An expression presupposes the forms of all the propositions in which it can occur, it’s the common characteristic mark of a class of propositions.

An expression is thus presented by means of a variable whose values are propositions that contain the expression. An expression has meaning only in a proposition; it's like a template.

The value a proposition may take is only an agreement. After all, words written are just ink on paper, and spoken words are just air flowing through our throats. Both the grammar and what those words mean is partially an agreement between the speaker and the receiver of the speech: the only thing essential to that agreement is that is is merely a description of symbols. It states nothing about what it signifies. __Language is an agreement__.

> The tacit conventions on which the understanding of everyday language depends are enormously complicated.
>
> -- __Tractatus__

A proposition is construed as a function of the expressions contained in it.

A sign is what can be perceived of a symbol. So one and the same sign can be common to two different symbols, in which case they signify in different ways. Our use of the same sign to signify two different objects can never indicate a common characteristic of the two, if we use it with two different models of signification. The sign, again, is arbitrary, and its relationship with the symbol is agreed.

In everyday language, it very frequently happens that the same word has different modes of signification (polysemic) or that two words that have different modes of signification are employed in propositions in what is superficially the same way (synonyms). In this way the most fundamental confusions are easily produced.

In order to avoid such errors we must make use of a sign-language that excludes them by not using the same sign for different symbols and by not using in a superficially similar way signs that have different modes of signification. Wittgenstein is thinking of a logically perfect language, but that has been sought of unsuccessfully: language evolves as an extension of groups of humans that communicate with each other (be it emojis, or highly eloquent poetry), and its being constantly evolving makes them prone to be [Lindy compatible](https://en.wikipedia.org/wiki/Lindy_effect): they carry on so long as they are useful, not because they are more or less to the logically ideal language. Thus, in my own experience, a logically perfect language is the one I use to communicate with myself; the one I agree I'm using with perfect consistency, the one were speaker and receiver have come to terms. Rewriting a text in your own words is, indeed, one of the requirements for reading a book correctly. It's the only way all definitions are laid down and the map can be adjust over and over to be as close as the territory as possible.

In order to recognise a symbol by its signs, we must observe how it is used with a sense. A sign does not determine a logical form unless it is taken together with its logic-syntactical employment.

If a sign is useless, it is meaningless. That is the point of [Occam’s maxim](https://en.wikipedia.org/wiki/Occam%27s_razor). If everything behaves as if a sign had meaning, then it does have meaning. The agreement makes itself visible: signs have meaning because they are vehicles of meaning, our very own bottles thrown away from the islands of ourselves into the ocean for others to catch. The growth of a language is reflected in its usage, not in its logic-syntactical employment. That’s why poetry will never die out.

No proposition can make a statement about itself, because a propositional sign cannot be contained in itself. The sign for a function already contains the prototype of its argument, and it cannot contain itself: In principle, you can't use the term you're defining in the definition itself. This makes the logic go around Gödel's paradox.

The rules of logical syntax must go without saying, once we know how each individual sign signifies. We pass without saying the rules of grammar over and over again; it would make communication very difficult. We just assume the code is known by the receptor of the message; but we can always say afterwards something like 'you know?' both as means for us to receive feedback on how well we did when expressing our ideas and as a way to make sure that the message was received.

A proposition possesses essential and accidental features. Accidental features are those that result from how the sign is produced. Essential features are those without which the proposition has no sense.

What is essential in a proposition is what all propositions that can express the same sense have in common. What is essential in a symbol is what all symbols that can serve the same purpose have in common (what we discussed above with regards to the word 'fridge'). *Calculus* comes from latin and means 'rock', because that’s what Romans used to count.

One could say that the real name of an object is what all symbols that signified it have in common. Although there is something accidental in our notations, this much is not arbitrary. A particular mode of signifying may be unimportant but it is always important that it is possible mode for signifying.

> In philosophy, again and again the individual case turns out to be unimportant, but the possibility of each individual case discloses something about the essence of the world.
>
> -- __Tractatus__

### 3.4 - A proposition determines a place in logical space. The existence of this logical place is guaranteed by the mere existence of its constituents.

In geometry and logic alike, a place is a possibility: something can exist in it. A proposition can determine only one place in logical space, nevertheless the whole of logical space must already be given by it.

### 3.5 - A propositional sign, applied and thought out, is a thought.

## 4 - A thought is a proposition with a sense

Humans possess the ability to construct languages capable of expressing every sense. Everyday language is a part of the human organism and is no less complicated than it.

However, it isn't perfect.

> Language disguises thought. So much so, that form of the outward form of the clothing it is impossible to infer the form of the thought beneath it, because the outward form of the clothing is not designed to reveal the form of the body, but for entirely different purposes.
>
> -- __Tractatus__

Most of the propositions and questions to be found in philosophical works are not false but nonsensical. They arise from our failure to understand the logic of our language; they are not problems at all.

All philosophy is a ‘critique of language’: the apparent logical form of a proposition need not be its real one.

At first sight, a proposition does not seem to be a picture of the reality with which it is concerned. And yet, phonetic notation, music notation, even written language prove to be pictures of what they represent. The sign is obviously a likeness of what is signified. And if we penetrate to the essence of its pictorial character, we see that it is not impaired by apparent regularities.

What allows us to project a symphony into the musical notation is what allows us to translate this language into the language of speakers. It is also what allows us to use computers to be 'intelligent', in the sense that they convey an ability that we thought was creative or 'human-only'. But, is that really *intelligence*, or just a way for us to rule out more and more of the things we thought make us human?
re they really intelligent?)

If I understand a proposition, then I know the situation that it represents. A proposition shows its sense, and restrict reality to two alternatives: true or false. One can understand without knowing whether it’s true.

> The meaning of simple signs must be explained to us if we are to understand them. With propositions, however, we make ourselves understood.
>
> -- __Tractatus__

We build knowledge iteratively: a proposition must use old expressions to communicate a new sense. A situation is constructed by way of experiment: one name stands for one thing, another for another, and they are combined with one another, and the whole group presents a state of affairs.

> My fundamental idea is that the ‘logical constants’ are not representatives; that there can be no representatives of the logic of facts. It is only in so far a proposition is logically articulated that it is a picture of a situation.
>
> -- __Tractatus__

Reality is compared with propositions. It must not be overlooked that a proposition has a sense that is independent of the facts.

Imagine a black spot on white paper: you can describe the shape of the spot by saying for each point on the sheet, whether it is black or white (indeed, computers do just that). But in order to be able to say that a point is black I must first know when a point is called black, and when white. In order to be able to say that a proposition is true, I must have determined in what circumstances I call that proposition true, and in doing so I determine the sense of the proposition.

Every proposition must already have a sense.

### 4.1 - Propositions represent the existence and non-existence of states of affairs

The totality of true propositions is the whole of natural sciences, and philosophy is not one of the natural sciences, not a body of doctrine, but an activity. A philosophical work consists essentially of examples.

> Without philosophy thoughts are, as it were, cloudy and indistinct: its task is to make them clear and to give them sharp boundaries.
>
> -- __Tractatus__

Darwin’s theory has no more to do with philosophy than any other hypothesis in natural science: Philosphy must set limits to what can be thought, and it will signify what cannot be said, by presenting clearly what can be said.

> Everything that can be thought at all can be thought clearly. Everything that can be put into words can be put clearly.
>
> -- __Tractatus__

Propositions can represent the whole of reality, but they cannot represent what they must have in common with reality in order to be able to represent it. Propositions cannot represent logical form: it is mirrored in them.

Let's extend the example of the mirror a little bit. Say you want to see what others see in you. You do so by looking yourself in a mirror. But the mirror has only reflect what you can see from it, not what others see when they look at you (and indeed, it's what is known as *specular image*). Your eyes can never be put in a position to look at yourself, because they are contained in you.

The propositional variable signifies the formal concept, and its values signify the objects that fall under the concept. A formal concept is given immediately any object falling under it is given.

> We can determine the general term of a series of forms by giving its first term and the general form of the operation that produces the next term out of the proposition that precedes it.
>
> -- __Tractatus__

This isn't always true. [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory) is the latest realisation that, in some cases, initial conditions do affect crucially the outcome of a simulation. Small variations in weather, under the normal range of error of the state-of-the-art detectors, can bring up absolutely different outcomes not so long ahead. Again, what you mean by "20 degrees" of temperature always has a margin of error, and within that, chaos theory reigns.

### 4.2 - The sense of a proposition is its agreement and disagreement with possibilities of existence and non-existence of states of affairs.

> The simplest kind of proposition asserts the existence of a state of affairs: there can be no elementary proposition contradicting it.
>
> -- __Tractatus__

An elementary proposition consists of names: it is a nexus of them ("this and this is that"). Even if the world is infinitely complex, there would still have to be objects and states of affairs. If an elementary proposition is true, then the state of affairs exists.

Wittgenstein thought that if all true elementary propositions are given, the result is a complete description of the world. However, he published Tractatus in 1918, and [Heisenberg's uncertainty principle](https://en.wikipedia.org/wiki/Uncertainty_principle) was introduced in 1927. However, the theory can accommodate that too, in the sense that we can agree about certain facts, up to a level of confidence.

### 4.3 - Truth-possibilities of elementary propositions mean possibilities of existence and non-existence of states of affairs.

### 4.4 - A proposition is an expression of agreement and disagreement with truth-possibilities of elementary propositions. These are the conditions of the truth and falsity of propositions.

The introduction of elementary propositions provides the basis for understanding all other kinds of propositions: a proposition is the expression of its truth-conditions.

Among the possible groups of truth-conditions there are two extreme cases: *tautologies*, where the proposition is true for all the truth-possibilities; and *contradictions*, where the proposition is false for all the truth-possibilities. Both lack sense, and they are part of the symbolism as much as 0 is part of arithmetic: They aren’t pictures of reality.

The truth-conditions of a proposition determine the range that it leaves open to the facts. A proposition, a picture, or a model is like a solid body that restricts the freedom of movements of the particles in the system.

A tautology’s truth is certain, a proposition’s possible, a contradiction’s impossible.

### 4.5 - Only what is essential to the most general propositional form may be included in its description— for otherwise it would not be the most general form. The general form of a proposition is: This is how things stand.

The general propositional form is a variable.

## 5 - A proposition is a truth-function of elementary propositions.
